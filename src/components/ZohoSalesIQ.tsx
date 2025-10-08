import { useEffect } from "react";

const ZohoSalesIQ = () => {
  useEffect(() => {
    // Define el objeto global $zoho y la función ready vacía
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

    // Crea el script de Zoho con su src y defer
    const script = document.createElement("script");
    script.id = "zsiqscript";
    script.src = "https://salesiq.zohopublic.com/widget?wc=siqc42bee079363f22134ac9c3c2ee103f465683c06506ee786ade41b0570a67d67";
    script.defer = true;

    // Inserta el script en el DOM
    document.body.appendChild(script);

    // Limpieza al desmontar el componente
    return () => {
      const scriptToRemove = document.getElementById("zsiqscript");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null; // No necesita renderizar contenido propio porque el widget se gestiona por script
};

export default ZohoSalesIQ;
