# First Real Store

Scaffolded Next.js + TypeScript + Tailwind starter with seed products.

Quick start:

```bash
cd "c:/Users/HP/Documents/HERD/first real project/store"
npm install
npm run dev
```

Environment:
- Copy `.env.local.example` to `.env.local` and set your Stripe and Supabase keys.

Stripe & Supabase:
- Use Stripe test keys for development. Configure webhook endpoint to `/api/webhook` and set `STRIPE_WEBHOOK_SECRET`.
- Create a simple `orders` table in Supabase with columns: `id (uuid)`, `session_id (text)`, `amount_total (integer)`, `currency (text)`, `customer_email (text)`, `metadata (jsonb)`.
