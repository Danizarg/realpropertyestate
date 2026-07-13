# Real Property Estate

Luxury real estate website for Marbella, Spain. Built with Next.js 16, TypeScript, Tailwind CSS v4, and Supabase.

---

## Setup

### 1. Create a Supabase project

Go to [supabase.com](https://supabase.com) and create a new project.

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key (server-side only) |
| `OWNER_EMAIL` | The email address of the property owner (dashboard access) |
| `NEXT_PUBLIC_SITE_URL` | Your production domain |

### 3. Run database schema

In the Supabase dashboard → SQL Editor, paste and run the contents of `supabase/schema.sql`.

If this project's schema was already applied before the `site_settings` table existed, run `supabase/migrations/002_site_settings.sql` instead of re-running the whole schema file (which would error on tables/policies that already exist).

### 4. Create Storage buckets

In Supabase → Storage, create two buckets, both set to **public** so URLs work without auth tokens:

- `property-images` — property photos
- `site-media` — homepage cover image/video (used by the "Homepage Cover" dashboard setting)

**Note on upload size limits:** Supabase enforces a project-wide global file upload limit in addition to any per-bucket limit — on the free tier this is typically 50MB. If you set a bucket's file size limit higher than the project's global limit, uploads will fail with a "Payload too large" error even though the bucket itself allows it. This project's cover video upload is capped at 50MB client-side (in `lib/media.ts`) to match. If your plan allows a higher global limit, you can raise both the bucket's `file_size_limit` and the constant in `lib/media.ts`.

After creating the buckets, run `supabase/storage-policies.sql` in the SQL Editor (for a brand-new project) — or, if `property-images` policies already exist, run only `supabase/migrations/003_site_media_storage_policies.sql`.

### 5. Create owner user

In Supabase → Authentication → Users, create a new user with the email address matching `OWNER_EMAIL`.

### 6. Install dependencies

```bash
npm install
```

---

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The site works without Supabase credentials — it falls back to seed data for public pages.

---

## Build

```bash
npm run build
npm start
```

---

## Deployment (Vercel)

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → import your repo.
3. Add all environment variables from `.env.local` in the Vercel project settings.
4. Deploy.

---

## Custom Domain (GoDaddy → Vercel)

After deploying to Vercel:

1. In Vercel → Project Settings → Domains, add your custom domain (currently `realpropertyestate.online`).
2. Vercel will give you DNS records to add.
3. In GoDaddy → DNS Management for your domain:
   - Add an **A record**: `@` → Vercel's IP (shown in Vercel dashboard, typically `76.76.21.21`)
   - Add a **CNAME record**: `www` → `cname.vercel-dns.com`
4. Wait for DNS propagation (up to 48 hours, usually much faster).

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, featured properties, positioning |
| `/properties` | Full catalogue with filters |
| `/properties/[slug]` | Property detail with gallery, specs, enquiry form |
| `/about` | Company editorial page |
| `/contact` | Contact form + company info |
| `/login` | Owner login |
| `/dashboard` | Owner property management |
| `/dashboard/properties/new` | Add new property |
| `/dashboard/properties/[id]/edit` | Edit property + manage images |
| `/dashboard/settings` | Homepage cover image/video, overlay text and button |
