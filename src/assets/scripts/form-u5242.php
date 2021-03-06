<?php 
/* 	
If you see this text in your browser, PHP is not configured correctly on this hosting provider. 
Contact your hosting provider regarding PHP configuration for your site.

PHP file generated by Adobe Muse CC 2018.1.1.386
*/

require_once('form_process.php');

$form = array(
	'subject' => 'Envío de Formulario Taser | Transaction',
	'heading' => 'Envío de nuevo formulario',
	'success_redirect' => '',
	'resources' => array(
		'checkbox_checked' => 'Marcada',
		'checkbox_unchecked' => 'No marcada',
		'submitted_from' => 'Formulario enviado desde el sitio web: %s',
		'submitted_by' => 'Dirección IP del visitante: %s',
		'too_many_submissions' => 'Se han realizado recientemente demasiados envíos a través de esta IP',
		'failed_to_send_email' => 'Error al enviar el correo electrónico',
		'invalid_reCAPTCHA_private_key' => 'Clave privada de reCAPTCHA no válida.',
		'invalid_reCAPTCHA2_private_key' => 'Clave privada de reCAPTCHA 2.0 no válida.',
		'invalid_reCAPTCHA2_server_response' => 'Respuesta de servidor de reCAPTCHA 2.0 no válida.',
		'invalid_field_type' => 'Tipo de campo desconocido: %s.',
		'invalid_form_config' => 'El campo \'%s\' contiene una configuración no válida.',
		'unknown_method' => 'Método de solicitud de servidor desconocido'
	),
	'email' => array(
		'from' => 'francisco.maidana@bingopilar.com.ar',
		'to' => 'francisco.maidana@bingopilar.com.ar'
	),
	'fields' => array(
		'custom_U5244' => array(
			'order' => 3,
			'type' => 'string',
			'label' => 'NAME',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'NAME\' es obligatorio.'
			)
		),
		'custom_U5295' => array(
			'order' => 4,
			'type' => 'string',
			'label' => 'SHIPPING ADDRESS',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'SHIPPING ADDRESS\' es obligatorio.'
			)
		),
		'custom_U5275' => array(
			'order' => 7,
			'type' => 'string',
			'label' => 'City',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'City\' es obligatorio.'
			)
		),
		'custom_U5252' => array(
			'order' => 5,
			'type' => 'string',
			'label' => 'State',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'State\' es obligatorio.'
			)
		),
		'custom_U5270' => array(
			'order' => 8,
			'type' => 'string',
			'label' => 'Zip Code',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'Zip Code\' es obligatorio.'
			)
		),
		'custom_U5248' => array(
			'order' => 9,
			'type' => 'string',
			'label' => 'Country',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'Country\' es obligatorio.'
			)
		),
		'custom_U5279' => array(
			'order' => 6,
			'type' => 'string',
			'label' => 'Street address Line 2',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'Street address Line 2\' es obligatorio.'
			)
		),
		'Email' => array(
			'order' => 2,
			'type' => 'email',
			'label' => 'YOUR E-MAIL',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'YOUR E-MAIL\' es obligatorio.',
				'format' => 'El campo \'YOUR E-MAIL\' contiene un correo electrónico no válido.'
			)
		),
		'custom_U5416' => array(
			'order' => 10,
			'type' => 'string',
			'label' => 'Street Address',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'Street Address\' es obligatorio.'
			)
		),
		'custom_U5428' => array(
			'order' => 12,
			'type' => 'string',
			'label' => 'Street Address Line 2',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'Street Address Line 2\' es obligatorio.'
			)
		),
		'custom_U5440' => array(
			'order' => 11,
			'type' => 'string',
			'label' => 'State',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'State\' es obligatorio.'
			)
		),
		'custom_U5452' => array(
			'order' => 14,
			'type' => 'string',
			'label' => 'ZIP Cod',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'ZIP Cod\' es obligatorio.'
			)
		),
		'custom_U5464' => array(
			'order' => 13,
			'type' => 'string',
			'label' => 'City',
			'required' => true,
			'errors' => array(
				'required' => 'El campo \'City\' es obligatorio.'
			)
		),
		'custom_U10665' => array(
			'order' => 1,
			'type' => 'radiogroup',
			'label' => 'Grupo de botones de opción',
			'required' => true,
			'optionItems' => array(
				'New Product 1                          $5,00'
			),
			'errors' => array(
				'required' => 'El campo \'Grupo de botones de opción\' es obligatorio.',
				'format' => 'El campo \'Grupo de botones de opción\' contiene un valor no válido.'
			)
		)
	)
);

process_form($form);
?>
