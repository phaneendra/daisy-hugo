<p align="center"><a href="https:/phanee.tk/academic-next/" target="_blank" rel="noopener"><img src="https:/phanee.tk/academic-next/img/logo_200px.png" alt="academic-next logo"></a></p>

# [academic-next](https:/phanee.tk/academic-next/): the website builder for [Next Js](https://nextjs.org/)

## **WIP**

A theme for next js similar to hugo academic theme

## The Page Builder to Easily Create Professional Websites :pencil2: :newspaper: :rocket:

**Create a free website with academic-next using Markdown. Choose a beautiful color theme and build anything with the Page Builder - over 40 _widgets_, _themes_, and _language packs_ included!**

[Check out the latest **demo**](https://phanee.tk/academic-next) of what you'll get in less than 10 minutes, or [view the **showcase**](https:/phanee.tk/academic-next/#expo) of personal, project, and business sites.

- 👉 [**Get Started**](https:/phanee.tk/academic-next/docs/install/)
- 📚 [View the **documentation**](https:/phanee.tk/academic-next/docs/)
- 🐦 Twitter: [@phaneekr](https://twitter.com/phaneekr)
- 💡 [Request a **feature** or report a **bug**](https://github.com/phaneendra/academic-next/issues)
- ⬆️ **Updating?** View the [Update Guide](https:/phanee.tk/academic-next/docs/update/) and [Release Notes](https:/phanee.tk/academic-next/updates/)
- :heart: **Support development** of academic-next:
  - :woman_technologist: [**Contribute**](https:/phanee.tk/academic-next/docs/contribute/)

[![Screenshot](https://raw.githubusercontent.com/phaneendra/academic-next/master/academic-next.png)](https://github.com/phaneendra/academic-next/)

**Key features:**

- **Page builder** - Create *anything* with [**widgets**](https:/phanee.tk/academic-next/docs/page-builder/) and [**elements**](https:/phanee.tk/academic-next/docs/writing-markdown-latex/)
- **Edit any type of content** - Blog posts, publications, talks, slides, projects, and more!
- **Create content** in [**Markdown**](https:/phanee.tk/academic-next/docs/writing-markdown-latex/),
- **Plugin System** - Fully customizable [**color** and **font themes**](https:/phanee.tk/academic-next/themes/)
- **Display Code and Math** - Code highlighting and [LaTeX math](https://en.wikibooks.org/wiki/LaTeX/Mathematics) supported
- **Integrations** - [Google Analytics](https://analytics.google.com), [Disqus commenting](https://disqus.com), Maps, Contact Forms, and more!
- **Beautiful Site** - Simple and refreshing one page design
- **Industry-Leading SEO** - Help get your website found on search engines and social media
- **Media Galleries** - Display your images and videos with captions in a customizable gallery
- **Mobile Friendly** - Look amazing on every screen with a mobile friendly version of your site
- **Multi-language** - 15+ language packs including English, 中文, and Português
- **Multi-user** - Each author gets their own profile page
- **Privacy Pack** - Assists with GDPR
- **Stand Out** - Bring your site to life with animation, parallax backgrounds, and scroll effects
- **One-Click Deployment** - No servers. No databases. Only files.

## Color Themes

Academic-next comes with **day (light) and night (dark) mode** built-in. Click the sun/moon icon in the top right of the [Demo](https://phanee.tk/) to see it in action!

Choose a stunning color and font theme for your site. Themes are fully customizable and include:

| `default`                                                                                                    | `ocean`                                                                                                  | `forest`                                                                                                   | `dark`                                                                                                 |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![default theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-default.png) | ![ocean theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-ocean.png) | ![forest theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-forest.png) | ![dark theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-dark.png) |

| `apogee`                                                                                                   | `1950s`                                                                                                  | `coffee`                                                                                                            | `strawberry`                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![apogee theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-apogee.png) | ![1950s theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-1950s.png) | ![coffee theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-coffee-playfair.png) | ![cupcake theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-strawberry.png) |

[Browse more themes...](https:/phanee.tk/academic-next/themes/)

## Install

You can choose from one of the following four methods to install:

- **one-click install using your web browser (recommended)**
- install on your computer using Git with the Command Prompt/Terminal app
- install on your computer by downloading the ZIP files

### Install with web browser

[Install Academic-next with Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/phaneendra/academic-next)

- One-click install of Academic-next creates an `academic-next` repository in your GitHub or GitLab account
- Netlify will provide you with a customizable URL to access your new site, [or get your own domain](https:/phanee.tk/academic-next/docs/domain/)
- Shortly after editing content in your repository, your site will automatically update
- Optionally, to edit your site in a [Markdown editor](https://www.typora.io) on your computer, perform the steps in the [*Install with Git*](#install-with-git) section below

### Install with Git

Prerequisites:

- [Download and install Git](https://git-scm.com/downloads)

Install:

1. [Fork](https://github.com/phaneendra/academic-next#fork-destination-box) the *Academic-next Kickstart* repository to create a new website
   - If you already created your site with **Netlify**, then skip this step
2. Clone your fork to your computer with Git, replacing `phaneendra` in the command below with your GitHub username: 

    ```bash
    git clone https://github.com/phaneendra/academic-next.git My_Website
    ```

3. Initialize the theme:

    ```bash
    cd My_Website
    git submodule update --init --recursive
    ```

### Install with ZIP

Install:

1. [Download](https://github.com/phaneendra/academic-next/archive/master.zip) and extract *academic-next*

## Demo content

For inspiration, refer to the [Markdown content](https://github.com/phaneendra/academic-next/tree/master/exampleSite) which powers the [Demo](https://phanee.tk/academic-next).

If you wish to initialise your site with the demo content, copy the contents of the `themes/academic-next/exampleSite/` folder to your website root folder, overwriting existing files if necessary. The `exampleSite` folder contains an example config file and content to help you get started. The following command can be used to accomplish this:

```bash
cp -av themes/academic-next/exampleSite/* .
```

## Get Started

[View the guide to Personalize and Deploy your new site](https:/phanee.tk/academic-next/docs/get-started/).

## Updating

[View the Update Guide](https:/phanee.tk/academic-next/docs/update/).

Feel free to *star* the project on [Github](https://github.com/phaneendra/academic-next/) and follow [@phaneekr](https://twitter.com/phaneekr) on Twitter to help keep track of [updates](https:/phanee.tk/academic-next/updates).

## License

Copyright 2019-present [Phaneendra](https://phanee.tk).

Released under the [MIT](https://github.com/phaneendra/academic-next/blob/master/LICENSE.md) license.

[![Analytics](https://ga-beacon.appspot.com/UA-78646709-2/academic-next/readme?pixel)](https://github.com/igrigorik/ga-beacon)