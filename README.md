# Embed Lite ⚡️
[![npm version](https://img.shields.io/npm/v/embed-lite.svg)](https://npmjs.org/package/embed-lite)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/embed-lite)](https://bundlephobia.com/package/embed-lite)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Embed Lite** is an ultra-fast, entirely zero-dependency library for statically converting simple URLs into robust HTML video iframes or secure social media blockquotes right in the browser or via Node.js.

By dodging bulky `oEmbed` API network calls, `embed-lite` converts known URLs instantly using safe pattern-matching rules resulting in instantaneous page loads.

## Installation

### Global Browser CDN (<script>)
Drop the compressed CDN link right into your HTML block and execute it globally!

```html
<script src="https://unpkg.com/embed-lite/dist/embed-lite.global.min.js"></script>
```

**Usage:**
```html
<script>
  const parsed = window.embedLite.embed("https://youtube.com/watch?v=123");
  document.getElementById('my-container').innerHTML = parsed.html;
</script>
```

### NPM (Node / React / Vue)
```bash
npm install embed-lite
```
```js
import { embed } from 'embed-lite';

const result = embed("https://x.com/x/status/123", { className: 'my-embed' });

if (result) {
    console.log(result.html); // -> "<blockquote class="twitter-tweet">..."
}
```

## Supported Platforms

The tool natively compiles over 15+ complex URL variants for platforms, securely shifting them between `<iframe>` execution natively, or explicitly leveraging `<blockquote> + <script>` APIs to securely render formats explicitly blocking frames.

- **Video**: YouTube, Vimeo, Dailymotion
- **Social**: Facebook, Instagram, Twitter/X, Reddit
- **Development & Design**: CodePen, Figma
- **Audio**: Spotify, SoundCloud
- **Maps**: Google Maps


*(Adding platforms takes two lines of code! PRs are exceptionally welcome!).*

## API

### `embed(url: string, options?: EmbedOptions): EmbedResult | null`
Parses the URL safely formatting matched HTML representations depending strictly on platform security contexts.

**Parameters**
- `url`: String representation of your target embedding interface.
- `options.className`: An optional string determining root div level class names!

**Returns**
- `{ html: string }` if successful.
- `null` if the URL format does not map to any standard platform configuration.

## Community & Support
- **Contributing**: We welcome PRs!
- **Support**: If you find `embed-lite` useful, please consider [sponsoring the project](https://github.com/sponsors/mgks) or giving it a star ⭐.

## License
Distributed under the MIT License. See `LICENSE` for more information.

![Website Badge](https://img.shields.io/badge/.*%20mgks.dev-blue?style=flat&link=https%3A%2F%2Fmgks.dev) ![Sponsor Badge](https://img.shields.io/badge/%20%20Become%20a%20Sponsor%20%20-red?style=flat&logo=github&link=https%3A%2F%2Fgithub.com%2Fsponsors%2Fmgks)