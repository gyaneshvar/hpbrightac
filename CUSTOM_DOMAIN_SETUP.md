# 🌐 Custom Domain Setup for H.P. Bright Academy Website

## Quick Setup Guide for Your Existing Domain

### What You'll Need:
- Your existing domain name (e.g., `hpbrightacademy.com`)
- Access to your domain's DNS settings
- GitHub repository with your website

---

## 🚀 Step-by-Step Setup

### 1. Add CNAME File to Your Project

```bash
# In your project directory
cd /Users/gyaneshvar/learning/hpbrightac

# Create CNAME file with your domain
echo "hpbrightacademy.com" > public/CNAME
```
*Replace `hpbrightacademy.com` with your actual domain*

### 2. Update Vite Configuration

Edit `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Changed from '/hpbrightac/' to '/'
  server: {
    allowedHosts: true
  },
  build: {
    outDir: 'dist',
  },
})
```

### 3. Update Router Configuration

Edit `src/App.jsx`:
```javascript
function App() {
  const basename = ''; // Remove basename for custom domain
  
  return (
    <Router basename={basename}>
      <div className="App">
        {/* ...rest of your code */}
      </div>
    </Router>
  );
}
```

### 4. Configure DNS Records

Log into your domain provider and add these DNS records:

#### A Records (for root domain):
| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

#### CNAME Record (for www subdomain):
| Type | Name | Value |
|------|------|-------|
| CNAME | www | yourusername.github.io |

*Replace `yourusername` with your GitHub username*

### 5. Enable Custom Domain in GitHub

1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. **Custom domain**: Enter your domain (e.g., `hpbrightacademy.com`)
4. ✅ **Enforce HTTPS**: Check this box
5. **Save**

### 6. Deploy Updated Configuration

```bash
git add .
git commit -m "Configure custom domain"
git push origin main
```

---

## 🌍 Popular Domain Providers Setup

### GoDaddy:
1. Login → **My Products** → **DNS**
2. **Add Record** → Select **A** → Enter GitHub IPs
3. **Add Record** → Select **CNAME** → Name: `www`, Points to: `yourusername.github.io`

### Namecheap:
1. **Domain List** → **Manage** → **Advanced DNS**
2. **Add New Record** → **A Record** → Host: `@`, Value: GitHub IP
3. **Add New Record** → **CNAME** → Host: `www`, Value: `yourusername.github.io`

### Cloudflare:
1. **DNS** tab → **Add record**
2. **Type: A**, **Name: @**, **IPv4: GitHub IP**, **Proxy: DNS only**
3. **Type: CNAME**, **Name: www**, **Target: yourusername.github.io**

### Google Domains:
1. **DNS** → **Manage custom records**
2. **Create new record** → **A** → **@** → GitHub IPs
3. **Create new record** → **CNAME** → **www** → `yourusername.github.io`

---

## ⏱️ Timeline

| Step | Time Required |
|------|---------------|
| Code changes & push | 5 minutes |
| DNS propagation | 15 minutes - 48 hours |
| SSL certificate | 1-24 hours |
| Full setup complete | Usually within 2-4 hours |

## ✅ Verification

### Check DNS Propagation:
```bash
# Check if your domain points to GitHub
nslookup yourdomain.com

# Should show GitHub's IP addresses
```

### Online Tools:
- [DNS Checker](https://dnschecker.org) - Check global DNS propagation
- [WhatsMyDNS](https://whatsmydns.net) - Verify DNS records worldwide

## 🎯 Final Result

After setup completes:
- ✅ **Your domain**: `https://yourdomain.com`
- ✅ **WWW version**: `https://www.yourdomain.com`
- ✅ **Automatic HTTPS**: Secure connection
- ✅ **Auto-redirect**: Both URLs work seamlessly

---

## 🔧 Troubleshooting

### "Domain not yet verified" error:
- Wait for DNS propagation (can take up to 48 hours)
- Double-check DNS records are correct

### SSL certificate issues:
- GitHub automatically issues certificates, but it takes time
- Ensure "Enforce HTTPS" is enabled after domain verification

### 404 errors:
- Verify CNAME file is in the `public` folder
- Check that base path is set to `/` in vite.config.js

### DNS not resolving:
- Use online DNS checker tools
- Contact your domain provider if records aren't updating

---

**💡 Pro Tip**: You can start with the GitHub subdomain (`yourusername.github.io/hpbrightac`) and add the custom domain later. The website works perfectly on both!

**🚀 Ready to go live with your own domain!**
