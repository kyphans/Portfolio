# Theme Colors System

Hệ thống quản lý màu sắc tập trung cho Portfolio, loại bỏ hardcoded colors và dễ dàng bảo trì.

## 📁 Cấu trúc

- **`colors.ts`**: File chứa tất cả các color constants
- Các màu được sử dụng bởi:
  - Tailwind CSS (`tailwind.config.js`)
  - Sanity CMS (`sanity.config.ts`)
  - CSS custom properties (`app/globals.css`)
  - Components (`components/*.tsx`)

## 🎨 Color Constants

### 1. Theme Colors (Pink & Green)

```typescript
THEME_COLORS.pink.primary       // #fa002e - Primary pink
THEME_COLORS.pink.primaryDark   // #d1003f - Dark pink
THEME_COLORS.pink.primary2      // #ff6b81 - Light pink
THEME_COLORS.pink.accent.rgb    // rgba(236, 72, 153, 0.8) - Canvas gradient

THEME_COLORS.green.primary      // #00ff00 - Neon green
THEME_COLORS.green.primaryDark  // #008000 - Dark green
THEME_COLORS.green.primary2     // #66ff66 - Light green
```

### 2. Neutral Colors (Shared)

```typescript
NEUTRAL_COLORS.background       // #0a0a0a - Main background
NEUTRAL_COLORS.backgroundCard   // #191919 - Card backgrounds, scrollbar
NEUTRAL_COLORS.foreground       // #FFFFFF - Text color
NEUTRAL_COLORS.muted            // #c6c9d8 - Muted text
```

### 3. HSL Values

```typescript
HSL_VALUES.pink.primary         // '349 100% 49%'
HSL_VALUES.green.primary        // '120 100% 50%'
HSL_VALUES.neutral.background   // '0 0% 4%'
```

### 4. Sanity Colors

```typescript
SANITY_THEME_COLORS.primary     // 'fa002e' (without #)
SANITY_THEME_URL                // Full theme URL for import
```

## 🔧 Cách sử dụng

### Trong React Components

```typescript
import { THEME_COLORS, NEUTRAL_COLORS } from '@/lib/constants/colors'

// Sử dụng trực tiếp
<div style={{ backgroundColor: NEUTRAL_COLORS.backgroundCard }}>

// Hoặc dùng với Tailwind classes
<div className="bg-background-card">
```

### Trong Tailwind Config

```javascript
// tailwind.config.js
colors: {
  primary: "hsl(var(--primary))",
  background: "hsl(var(--background))",
  "background-card": "var(--background-card)",
  // ...
}
```

### Trong CSS

```css
/* app/globals.css */
:root {
  --primary: 349 100% 49%;
  --background-card: #191919;
}

.my-class {
  background: var(--background-card);
}
```

### Theme-aware components

```typescript
import { useTheme } from 'next-themes'
import { THEME_COLORS } from '@/lib/constants/colors'

const { theme } = useTheme()
const color = theme === 'green'
  ? THEME_COLORS.green.primary
  : THEME_COLORS.pink.primary
```

## ✅ Files Updated

### Created
- ✅ `lib/constants/colors.ts` - Central color definitions
- ✅ `lib/constants/README.md` - Documentation

### Modified
- ✅ `sanity.config.ts` - Referenced color constants via comments
- ✅ `tailwind.config.js` - Added comments and background-card color
- ✅ `app/globals.css` - Added --background-card CSS variable
- ✅ `components/LoadingBar.tsx` - Uses THEME_COLORS
- ✅ `components/CardAnimation.tsx` - Uses THEME_COLORS
- ✅ `components/BlogCard.tsx` - Uses Tailwind class
- ✅ `components/Blog.tsx` - Uses Tailwind class

## 🎯 Benefits

1. **Tập trung hóa**: Tất cả màu ở một nơi
2. **Dễ bảo trì**: Thay đổi màu chỉ cần sửa ở colors.ts
3. **Type-safe**: TypeScript kiểm tra type
4. **Consistent**: Đảm bảo màu nhất quán trong toàn bộ app
5. **No hardcoding**: Không còn mã màu rải rác trong code

## 🔄 Updating Colors

Để thay đổi theme colors:

1. Mở `lib/constants/colors.ts`
2. Cập nhật giá trị trong `THEME_COLORS` hoặc `NEUTRAL_COLORS`
3. Nếu thay đổi Sanity colors, cập nhật `SANITY_THEME_COLORS`
4. Build lại project: `npm run build`

## 📝 Notes

- **Sanity theme import**: Phải sử dụng literal string do giới hạn của ES6 imports
- **CSS variables**: Sử dụng HSL format cho Tailwind, hex cho các giá trị khác
- **Theme switching**: Hỗ trợ pink/green themes qua next-themes
