export const DATA = [
	{
		id: 'skin-color',
		title: 'Qué color de piel tenés?',
		type: 'radio',
		values: [
			{
				color: '#f9e5d9',
				name: 'Muy Clara',
				value: 'muy_clara'
			},
			{
				color: '#efd2cc',
				name: 'Clara',
				value: 'clara'
			},
			{
				color: '#deab7d',
				name: 'Media',
				value: 'media'
			},
			{
				color: '#b67245',
				name: 'Media Oscura',
				value: 'media_oscura'
			},
			{
				color: '#64321e',
				name: 'Oscura',
				value: 'oscura'
			}
		]
	},
	{
		id: 'eyes-color',
		title: 'Qué color de ojos tenés?',
		type: 'radio',
		values: [
			{
				color: '#5a2209',
				name: 'Marrón Oscuro',
				value: 'marron_oscuro'
			},
			{
				color: '#a77144',
				name: 'Marrón Claro',
				value: 'marron_claro'
			},
			{
				color: '#5e7393',
				name: 'Celestes',
				value: 'celestes'
			},
			{
				color: '#6e844f',
				name: 'Verdes',
				value: 'verdes'
			}
		]
	},
	{
		id: 'hair-color',
		title: 'Qué color de pelo tenés?',
		type: 'radio',
		values: [
			{
				color: '#0f0d0e',
				name: 'Negro',
				value: 'negro'
			},
			{
				color: '#361911',
				name: 'Marrón Oscuro',
				value: 'marron_oscuro'
			},
			{
				color: '#7c5535',
				name: 'Marrón Claro',
				value: 'marron_claro'
			},
			{
				color: '#b29669',
				name: 'Rubio Oscuro',
				value: 'rubio_oscuro'
			},
			{
				color: '#ffe1b0',
				name: 'Rubio Claro',
				value: 'rubio_claro'
			},
			{
				color: '#912222',
				name: 'Rojo',
				value: 'rojo'
			},
			{
				color: '#875a96',
				name: 'Otro',
				value: 'otro'
			}
		]
	},
	{
		id: 'hair-type',
		title: '¿Cómo es tu pelo?',
		type: 'select',
		values: [
			{
				image: 'hair_type/liso.jpg',
				name: 'Liso',
				value: 'liso'
			},
			{
				image: 'hair_type/ondulado.jpg',
				name: 'Ondulado',
				value: 'ondulado'
			},
			{
				image: 'hair_type/rizado.jpg',
				name: 'Rizado',
				value: 'rizado'
			},
			{
				image: 'hair_type/seco.jpg',
				name: 'Seco',
				value: 'seco'
			},
			{
				image: 'hair_type/graso.jpg',
				name: 'Graso',
				value: 'graso'
			},
			{
				image: 'hair_type/sin_volumen.jpg',
				name: 'Sin Volumen',
				value: 'sin_volumen'
			},
			{
				image: 'hair_type/muy_danado.jpg',
				name: 'Muy Dañado',
				value: 'muy_danado'
			}
		]
	},
	{
		id: 'skin-type',
		title: 'Qué tipo de piel tenés?',
		type: 'select',
		values: [
			{
				image: 'skin_type/normal.jpg',
				name: 'Normal',
				value: 'normal'
			},
			{
				image: 'skin_type/seca.jpg',
				name: 'Seca',
				value: 'seca'
			},
			{
				image: 'skin_type/mixta.jpg',
				name: 'Mixta',
				value: 'mixta'
			},
			{
				image: 'skin_type/grasa.jpg',
				name: 'Grasa',
				value: 'grasa'
			},
			{
				image: 'skin_type/acne.jpg',
				name: 'Acne',
				value: 'acne'
			}
		]
	},
	{
		id: 'makeup-ocassions',
		title: '¿En qué ocasiones usás tu makeup?',
		type: 'select',
		values: [
			{
				name: 'Trabajo',
				value: 'trabajo',
				image: 'makeup_ocassions/trabajo.jpg'
			},
			{
				name: 'Fiestas',
				value: 'fiesta',
				image: 'makeup_ocassions/fiesta.jpg'
			},
			{
				name: 'Eventos Sociales',
				value: 'eventos_sociales',
				image: 'makeup_ocassions/eventos_sociales.jpg'
			}
		]
	},
	{
		id: 'makeup-importance',
		title: '¿A qué le das mas importancia con tu maquillaje?',
		type: 'select',
		values: [
			{
				name: 'Ojos',
				value: 'ojos',
				icon: 'makeup_importance/ojos.svg'
			},
			{
				name: 'Manos',
				value: 'manos',
				icon: 'makeup_importance/manos.svg'
			},
			{
				name: 'Cejas',
				value: 'cejas',
				icon: 'makeup_importance/cejas.svg'
			},
			{
				name: 'Pómulos',
				value: 'pomulos',
				icon: 'makeup_importance/pomulos.svg'
			},
			{
				name: 'Piel',
				value: 'piel',
				icon: 'makeup_importance/piel.svg'
			},
			{
				name: 'Cabello',
				value: 'cabello',
				icon: 'makeup_importance/cabello.svg'
			}
		]
	},
	{
		id: 'fragances',
		title: '¿Qué tipo de fragancias preferís?',
		type: 'select',
		values: [
			{
				name: 'Florales',
				value: 'florales',
				image: 'fragances/florales.jpg'
			},
			{
				name: 'Frescas',
				value: 'frescas',
				image: 'fragances/frescas.jpg'
			},
			{
				name: 'Maderas',
				value: 'maderas',
				image: 'fragances/maderas.jpg'
			},
			{
				name: 'Cítricas',
				value: 'citricas',
				image: 'fragances/citricas.jpg'
			}
		]
	},
	{
		id: 'define_style',
		title: 'Como definirias tu estilo?',
		type: 'select',
		values: [
			{
				name: 'Urbano',
				value: 'urbano',
				bigImage: 'define_style/urbano.jpg'
			},
			{
				name: 'Elegante',
				value: 'elegante',
				bigImage: 'define_style/elegante.jpg'
			},
			{
				name: 'Glam',
				value: 'glam',
				bigImage: 'define_style/glam.jpg'
			},
			{
				name: 'Casual',
				value: 'casual',
				bigImage: 'define_style/casual.jpg'
			}
		]
	},
	{
		id: 'beauty_accessories',
		title: '¿Qué accesorios te gusta usar?',
		type: 'select',
		values: [
			{
				name: 'Collares',
				value: 'collares',
				image: 'beauty_accessories/collares.jpg'
			},
			{
				name: 'Pulseras',
				value: 'pulseras',
				image: 'beauty_accessories/pulseras.jpg'
			},
			{
				name: 'Anillos',
				value: 'anillos',
				image: 'beauty_accessories/anillos.jpg'
			},
			{
				name: 'Aros',
				value: 'aros',
				image: 'beauty_accessories/aros.jpg'
			},
			{
				name: 'Otros accesorios de pelo',
				value: 'hebillas',
				image: 'beauty_accessories/hebillas.jpg'
			},
			{
				name: 'Prendedores',
				value: 'prendedores',
				image: 'beauty_accessories/prendedores.jpg'
			}
		]
	}
];

export default DATA;
