import { mercadopago, PLANS } from '@/lib/mercadopago'

export async function POST(req: Request) {
  const { plan } = await req.json()

  const preference = await mercadopago.create({
    body: {
      items: [{
        title: `Plan ${PLANS[plan].name}`,
        unit_price: PLANS[plan].price,
        quantity: 1
      }],
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/failure`
      }
    }
  })

  return Response.json({ init_point: preference.init_point })
}