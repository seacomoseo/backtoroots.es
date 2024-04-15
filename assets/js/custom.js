document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#form_inicio_test_doshas > form')

  form.addEventListener('change', e => {
    const firstChecked = form.querySelector('input[name="Textura de la piel"]:checked')

    if (firstChecked) {
      const name = form.querySelector('input[name="Nombre"]').value
      const email = form.querySelector('input[name="Email"]').value
      const result = form.querySelector('input[name="Resultado"]')
      const doshas = {
        kapha: form.querySelectorAll('.contact__form-label:nth-child(2) > .contact__form-radio:checked').length,
        pitta: form.querySelectorAll('.contact__form-label:nth-child(3) > .contact__form-radio:checked').length,
        vatta: form.querySelectorAll('.contact__form-label:nth-child(4) > .contact__form-radio:checked').length
      }
      const max = Object.keys(doshas).reduce((max, key) => doshas[key] > doshas[max] ? key : max, 'kapha')
      let response

      form.querySelector('input[name="_cc"]').value = email
      response = `
¡Enhorabuena ${name}!

¡¡Ya tienes una estimación de cuál podría ser tu dosha!!

Digo estimación… porque ahora mismo sólo tenemos un test y lo ideal es que éste fuera complementado por una consulta ayurvédica con un profesional. Será entonces, cuando podamos ir más al detalle de tu composición, así como entrar en una segunda fase que iría de la mano de pautas tanto a nivel físico como mental pasando por el tipo de nutrición ideal para tu caso en concreto.

Si fuera el caso, y así lo deseas, ¡contéstame a este correo con un “quiero una sesión con un profesional” y me pondré en contacto contigo!

De momento, y con lo que tenemos, ¡voy a darte ya unos tips!

¡Vamos allá!...

¡¡Y TU DOSHA EEEEEEEEEEEES 🥁🥁🥁🥁🥁🥁 ${max.toUpperCase()}!!
`
      if (max === 'kapha') {
        response += `
La emoción y sentimiento, amor y cariño, devoción y fe, que permite conservar los logros conseguidos con nuestro esfuerzo y alcanzar así nuestras metas en la vida
        
Kapha tiene unas características físicas, mentales y conductuales que los hacen únicos. Una forma particular de expresarse emocional y mentalmente. Unas características físicas que los identifican, y en definitiva un biotipo estructural que marcará su forma de ser.
        
Pueden desestabilizarse en determinadas épocas del año como invierno y necesitan comer alimentos de aire y fuego para compensar el exceso de agua y tierra o bien evitar comer otros ciertos alimentos, como las patatas, por ejemplo, por su alto contenido en tierra.
`
      } else if (max === 'pitta') {
        response += `
La inteligencia el coraje, la vitalidad. La capacidad de decisión y motivación para alcanzar nuestras metas

Pitta tiene unas características físicas, mentales y conductuales que los hacen únicos. Una forma particular de expresarse emocional y mentalmente. Unas características físicas que los identifican, y en definitiva un biotipo estructural que marcará su forma de ser.

Pueden desestabilizarse en determinadas épocas del año como verano y necesitan comer alimentos de tierra, agua y aire para compensar el exceso de fuego o bien evitar comer otros ciertos alimentos, como el ajo por ejemplo, por su alto contenido en fuego. 
`
      } else if (max === 'vatta') {
        response += `
La creatividad, el entusiasmo, la velocidad, la agilidad y la sensibilidad, que nos permiten alcanzar nuestras metas en la vida

Vata tiene unas características físicas, mentales y conductuales que los hacen únicos. Una forma particular de expresarse emocional y mentalmente. Unas características físicas que los identifican, y en definitiva un biotipo estructural que marcará su forma de ser.

Pueden desestabilizarse en determinadas épocas del año como otoño y necesitan comer alimentos de tierra, agua y fuego para compensar el exceso de aire o bien evitar comer otros ciertos alimentos, como los frutos secos, por ejemplo, por su alto contenido en aire.
`
      }
      response += `
Si quieres saber más acerca de cómo amar y por cuidar de tu dosha (factores que lo desestabilizan, épocas del año, alimentos, factores que lo armonizan, etc.) y prevenir enfermedades, puedes responderme a este email con un “desearía saber más acerca de cómo mantener en equilibrio mi ${max.toUpperCase()}”.

Aprovecho para mandarte un abrazo y agradecerte haberte pasado por aquí

Cualquier cosita será un placer seguir teniendo noticias tuyas

Con amor

Marta
`
      result.value = response
    }
  })
})
