import { useState } from 'react';

export interface DomainCheckInfo {
  available: boolean | null;
  whois: string;
  price: number | null; // <-- agregamos el precio
}

export const useDomainCheck = (tlds: string[] = ['.com', '.net', '.org']) => {
  const [results, setResults] = useState<Record<string, DomainCheckInfo>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkDomain = async (input: string) => {
    setLoading(true);
    setError(null);
    setResults({});

    try {
      const trimmed = input.trim().toLowerCase();
      if (!trimmed) throw new Error('Ingresa un dominio válido');

      const hasTLD = /\.(com|net|org)$/i.test(trimmed);
      const domainsToCheck = hasTLD ? [trimmed] : tlds.map(tld => trimmed + tld);

      const newResults: Record<string, DomainCheckInfo> = {};

      for (const domain of domainsToCheck) {
        const res = await fetch('https://donhoster.com/api/domainapi.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ domain }),
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP Error ${res.status}: ${text}`);
        }

        const data = await res.json();

        // Guardar disponibilidad, whois y precio
        newResults[domain] = {
          available: data.success ? data.results?.[domain]?.available ?? false : false,
          whois: data.results?.[domain]?.whois ?? '',
          price: data.results?.[domain]?.price ?? null,
        };
      }

      setResults(newResults);

    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, checkDomain };
};
