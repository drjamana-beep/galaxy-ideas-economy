# 🌌 مجرة اقتصاد الأفكار — Galaxy of Ideas Economy

نظام إيكولوجي رقمي إنساني من **14 كوكباً**، مُدار كـ Monorepo باحتراف.

> «نربح لنعطي — ونُوصِل لمن لا يملك بتكلفة الطريق فقط»

---

## 🏗️ البنية

```
galaxy-ideas-economy/
├── apps/              # الواجهات الأربع (main-galaxy, ideas-portal, raghad, auth)
├── packages/          # حزم مشتركة (ui, core, firebase-client, types)
├── planets/           # الكواكب الـ14 (تُضاف تدريجياً)
├── protocols/         # البروتوكولات (إعادة توزيع الفائض)
├── services/          # Cloud Functions
├── infra/             # firebase.json + قواعد الأمان + DNS
├── scripts/           # أتمتة (new-planet.sh)
└── docs/              # توثيق معماري (ADRs)
```

---

## 🚀 البدء السريع

```bash
# التثبيت (مرة واحدة للكل بفضل pnpm)
pnpm install

# تطوير كل التطبيقات بالتوازي
pnpm dev

# بناء الكل (مع التخزين المؤقت الذكي من Turbo)
pnpm build

# فحص الجودة
pnpm lint && pnpm test
```

---

## 🪐 إضافة كوكب جديد

```bash
pnpm new:planet p15-energy "الطاقة" "⚡" "#FBBF24"
```

ثم أضف الكوكب إلى `packages/ui/components/GalaxyMap/planets.data.js`.

---

## ☁️ النشر

| الأمر | الوظيفة |
|---|---|
| `pnpm deploy:apps` | نشر الواجهات على Firebase Hosting |
| `pnpm deploy:functions` | نشر Cloud Functions |
| `pnpm deploy:rules` | نشر قواعد Firestore والتخزين |

النشر التلقائي يحدث عبر **GitHub Actions** عند الدفع إلى `main`.

---

## 🌐 النطاقات

| النطاق الفرعي | التطبيق |
|---|---|
| `galaxy-economy.org` | main-galaxy |
| `ideas.galaxy-economy.org` | ideas-portal |
| `raghad.galaxy-economy.org` | raghad-alhayah |
| `auth.galaxy-economy.org` | unified-auth |

---

## 📦 الحزم المشتركة

- **`@galaxy/ui`** — مكتبة المكونات (تتضمن `GalaxyMap`)
- **`@galaxy/firebase-client`** — تهيئة Firebase موحّدة
- **`@galaxy/core`** — منطق العمل المشترك
- **`@galaxy/types`** — أنواع TypeScript مشتركة

استيراد مثال:
```js
import { GalaxyMap } from '@galaxy/ui/GalaxyMap';
```

---

## 📜 الترخيص

Creative Commons CC BY 4.0 — جميل العديني · 2026
