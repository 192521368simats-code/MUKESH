# SecureTransfer — Working UI

This is a standalone, browser-runnable UI for the capstone project:

**Design and Implementation of a Secure File Transfer System Using End-to-End Encryption and User Authentication**

## Run

No build tools are required for this UI version.

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. For best Web Crypto behavior, serve it with a local HTTP server:

```bash
python -m http.server 8000
```

Then open:

http://localhost:8000

## Demo accounts

Demo User 1:
- Email: demo1@example.com
- Password: Demo@12345

Demo User 2:
- Email: demo2@example.com
- Password: Demo@12345

## Working features

- Registration
- Login/logout
- Demo accounts
- Dashboard statistics
- File selection and drag/drop
- Recipient selection
- AES-256-GCM browser encryption using Web Crypto
- SHA-256 hashing and verification
- Sent/received file views
- Authorization checks for file actions
- Decryption and download
- Delete
- Profile
- Security Center
- Responsive desktop/mobile UI
- Local persistence using browser localStorage

## Important architecture note

This version is a **working frontend/demo application**. Its persistence is local to the browser and is intended to demonstrate the complete UI interaction and browser cryptography workflow.

For the final capstone production architecture, replace the localStorage persistence/authentication with the real backend, PostgreSQL database, server-side authorization, encrypted file storage, and production key-management architecture described in your project specification.

Do not present localStorage authentication as production-grade security.


## Updated UI

This updated version adds:
- Light/Dark mode toggle with saved preference.
- Working Send Files navigation.
- Recipient-specific Received Files view.
- Visible encrypted `.enc` storage filename and encrypted size.
- Delivered status for sent/received transfers.
- Sender message shown in File Details.
- AES-256-GCM encryption and SHA-256 verification remain part of the working browser demo.

Demo workflow:
1. Login as `demo1@example.com` / `Demo@12345`.
2. Upload a file and select Demo User 2.
3. Click Encrypt & Send.
4. Logout.
5. Login as `demo2@example.com` / `Demo@12345`.
6. Open Received Files.
7. The encrypted `.enc` representation is shown.
8. View details or Download to decrypt and verify SHA-256.


## Professional UI + reliability update (August 2026)

- Redesigned visual system with a professional blue/cyan security theme, larger readable typography, consistent spacing, softer cards, improved buttons, and responsive layouts.
- Improved dashboard/sidebar/header sizing for desktop and mobile.
- Added stronger focus states, hover states, dark-mode polish, and clearer status badges.
- Send workflow now stores encrypted binary data in **IndexedDB** instead of putting the encrypted file itself into localStorage. This avoids the common browser localStorage quota failure that can make Send appear not to work.
- Send validates the recipient and shows progress/error feedback.
- Received-file Download reads the encrypted payload from IndexedDB, decrypts it, verifies SHA-256, then downloads the original file.
- Delete also removes the encrypted payload from the browser vault.

### Important limitation
This is still a frontend-only demonstration. Two demo users can transfer files through the same browser profile because the transfer data is stored locally. It is **not** a real network transfer between different computers/phones. For the final capstone, the frontend should call a backend API with authenticated sessions, server-side authorization, a database, encrypted object/file storage, and proper key management.
