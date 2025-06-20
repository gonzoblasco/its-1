import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export const mercadopago = new Preference(client);

export const PLANS = {
  pro: { name: 'Pro', price: 1900, features: ['Todos los agentes', '500 mensajes/mes'] },
  elite: { name: 'Elite', price: 3900, features: ['Todo Pro', '1000 mensajes/mes', 'Soporte prioritario'] }
};