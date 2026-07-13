# Gebeyaw Yesigat — AWS Portfolio

A modern React + Vite portfolio designed for deployment with AWS Amplify Hosting.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Build for production

```bash
npm run build
```

The production files will be created inside the `dist` folder.

## Deploy to AWS Amplify with GitHub

1. Create a new GitHub repository, for example `gebeyaw-aws-portfolio`.
2. Open this project in VS Code.
3. Run:

```bash
git init
git add .
git commit -m "Create modern portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/gebeyaw-aws-portfolio.git
git push -u origin main
```

4. Sign in to the AWS Console.
5. Search for **AWS Amplify**.
6. Choose **Create new app** or **Deploy an app**.
7. Select **GitHub** and authorize AWS Amplify.
8. Select your portfolio repository and the `main` branch.
9. Amplify should detect the included `amplify.yml`.
10. Choose **Save and deploy**.
11. After the build finishes, Amplify gives you an `amplifyapp.com` URL.
12. Every future push to GitHub will automatically redeploy the portfolio.

## Connect gebeyawy.com

After the Amplify deployment works:

1. In Amplify, open your app.
2. Go to **Hosting → Custom domains**.
3. Choose **Add domain**.
4. Enter `gebeyawy.com`.
5. Amplify will show the DNS records required for verification.
6. Add those records wherever your domain DNS is currently managed.
7. Wait for DNS propagation and SSL certificate provisioning.

Do not cancel your existing Hostinger site until the AWS version works correctly.

## Before publishing

- Replace any project links that are outdated.
- Add a downloadable resume PDF to `public/resume.pdf`, then add a resume button.
- Replace the GY initials avatar with a professional photo if desired.
- Check the education dates and descriptions.
- Test every project and social link.

## Contact improvements

- The **Hire Me** button now scrolls to a strongly highlighted contact section.
- **Open Gmail** opens a browser-based Gmail compose window.
- The email address is visible and clickable.
- **Copy email** works as a fallback when no default email application is configured.


## Professional update

This version adds a recruiter-focused cloud section, an AWS architecture path, stronger visual trust badges, and improved positioning for software, cloud, and IT roles.
