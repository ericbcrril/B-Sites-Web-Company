const sendEmail = (event) => {
    event.preventDefault(); // Prevenir que el formulario se envíe de la forma tradicional.
  
    const userName = event.target.userName.value;
    const message = event.target.message.value;
    const emailContact = "contacto@bsitescomp.com"; // Dirección de email de destino
  
    // Construimos el asunto y el cuerpo del correo
    const emailSubject = `Consulta de Proyecto`;
    const emailBody = `Hola, soy ${userName}.\nMi proyecto:\n${message}`;
  
    // Codificamos el contenido para que sea válido en una URL
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);
  
    // Creamos el enlace para enviar el correo
    const mailtoLink = `mailto:${emailContact}?subject=${encodedSubject}&body=${encodedBody}`;
  
    // Redirigimos al usuario a la aplicación de correo
    window.open(mailtoLink, '_blank');
  };
  
  export default sendEmail;
  