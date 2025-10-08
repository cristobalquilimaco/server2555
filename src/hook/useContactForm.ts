// hooks/useContactForm.ts
import { useState, useCallback } from 'react';
import { ContactService, ContactFormData, ApiResponse } from '../APIServices/contactServices';

export interface FormState {
  isLoading: boolean;
  isSubmitted: boolean;
  isSuccess: boolean;
  message: string;
  error: string | null;
  ticketId?: string | number;
}

export interface UseContactFormReturn {
  formState: FormState;
  submitForm: (formData: ContactFormData) => Promise<void>;
  resetForm: () => void;
  clearMessages: () => void;
}

const initialFormState: FormState = {
  isLoading: false,
  isSubmitted: false,
  isSuccess: false,
  message: '',
  error: null,
  ticketId: undefined
};

export const useContactForm = (): UseContactFormReturn => {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  /**
   * Envía el formulario de contacto
   */
  const submitForm = useCallback(async (formData: ContactFormData): Promise<void> => {
    // Reset estado previo
    setFormState({
      ...initialFormState,
      isLoading: true
    });

    try {
      // Validación local
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.subject.trim() ||
        !formData.message.trim()
      ) {
        throw new Error('Por favor, completa todos los campos obligatorios');
      }

      // ✅ Validación de captcha
      if (!formData.captcha?.trim()) {
        throw new Error('Por favor, confirma el captcha');
      }

      // Llamar al servicio de API
      const response: ApiResponse = await ContactService.submitContactForm(formData);

      if (response.success) {
        // Éxito
        setFormState({
          isLoading: false,
          isSubmitted: true,
          isSuccess: true,
          message: response.message,
          error: null,
          ticketId: response.ticketId
        });

        // Auto-reset de "isSubmitted" después de unos segundos (opcional)
        setTimeout(() => {
          setFormState(prev => ({ ...prev, isSubmitted: false }));
        }, 5000);

      } else {
        // Error de la API
        setFormState({
          isLoading: false,
          isSubmitted: true,
          isSuccess: false,
          message: '',
          error: response.message,
          ticketId: undefined
        });
      }

    } catch (error) {
      // Error de validación o conexión
      console.error('Error en useContactForm:', error);

      setFormState({
        isLoading: false,
        isSubmitted: true,
        isSuccess: false,
        message: '',
        error: error instanceof Error ? error.message : 'Error desconocido',
        ticketId: undefined
      });
    }
  }, []);

  /**
   * Resetea completamente el formulario
   */
  const resetForm = useCallback((): void => {
    setFormState(initialFormState);
  }, []);

  /**
   * Limpia solo los mensajes manteniendo otros estados
   */
  const clearMessages = useCallback((): void => {
    setFormState(prev => ({
      ...prev,
      message: '',
      error: null,
      isSubmitted: false
    }));
  }, []);

  return {
    formState,
    submitForm,
    resetForm,
    clearMessages
  };
};
