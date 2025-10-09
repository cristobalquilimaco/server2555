// services/contactService.ts
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  captcha?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  ticketId?: string | number;
  error?: string;
}

interface RawApiResult {
  success?: boolean;
  result?: string;
  message?: string;
  ticketId?: string | number;
  ticket_id?: string | number;
  id?: string | number;
}

export class ContactService {
  private static readonly API_ENDPOINT = 'https://donhoster.com/api/contactapi.php';
  
  static async submitContactForm(formData: ContactFormData): Promise<ApiResponse> {
    try {
      // Basic validation before sending
      const validation = this.validateFormData(formData);
      if (!validation.isValid) {
        return { success: false, message: validation.message || 'Invalid form data' };
      }

      // 🔧 NOW SEND JSON (as your PHP expects)
      const requestData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        source: 'web_contact_form'
      };

      // Timeout controller
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 20000); // 20 seconds

      const response = await fetch(this.API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(requestData),
        signal: controller.signal,
        credentials: 'omit', // Do not send cross-origin cookies
      });

      clearTimeout(timeoutId);

      // Read response as text first for debugging
      const responseText = await response.text();
      
      if (!response.ok) {
        console.error('HTTP Error:', response.status, responseText);
        throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
      }

      // Try parsing JSON
      let result: RawApiResult;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Response is not valid JSON:', responseText);
        throw new Error('The server response is not valid JSON');
      }

      return this.processApiResponse(result);
      
    } catch (error) {
      console.error('Error while submitting contact form:', error);
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          return {
            success: false,
            message: 'The request took too long. Please try again.',
            error: 'Timeout'
          };
        }
        
        // Network/CORS error
        if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
          return {
            success: false,
            message: 'Connection error. Make sure you are on https://donhoster.com or https://donhoster.es',
            error: 'Network Error - Possible CORS issue'
          };
        }
      }
      
      return {
        success: false,
        message: this.getErrorMessage(error),
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
  
  private static validateFormData(data: ContactFormData) {
    if (!data.name?.trim()) return { isValid: false, message: 'Name is required' };
    if (!data.email?.trim()) return { isValid: false, message: 'Email is required' };
    if (!data.subject?.trim()) return { isValid: false, message: 'Subject is required' };
    if (!data.message?.trim()) return { isValid: false, message: 'Message is required' };
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      return { isValid: false, message: 'Invalid email format' };
    }
    
    return { isValid: true };
  }

  private static processApiResponse(result: RawApiResult): ApiResponse {
    // Handle successful response
    if (result.success === true || result.result === 'success') {
      return {
        success: true,
        message: result.message || 'Message sent successfully! We will contact you soon.',
        ticketId: result.ticket_id || result.ticketId || result.id
      };
    }
    
    // Handle server-side error
    return {
      success: false,
      message: result.message || 'An error occurred while sending the message.',
      error: result.message
    };
  }
  
  private static getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      if (error.name === 'AbortError') return 'The connection took too long. Please try again.';
      if (error.message.includes('Failed to fetch')) return 'Network error. Please check your internet connection.';
      if (error.message.includes('NetworkError')) return 'Network error. Please try again.';
      if (error.message.includes('HTTP Error: 5')) return 'Server error. Our team has been notified.';
      if (error.message.includes('HTTP Error: 4')) return 'Invalid request. Please review your input.';
      return error.message;
    }
    return 'Unknown error. Please contact support.';
  }
}
