<p align="center"><a href="https:/phaneendra.github.com/academic-next/" target="_blank" rel="noopener"><img src="https:/phaneendra.github.com/academic-next/img/logo_200px.png" alt="academic-next logo"></a></p>

# [academic-next](https:/phaneendra.github.com/academic-next/): The website builder with [Next Js](https://nextjs.org/)

# **WIP (Work in Progress)**

A theme using next js for building websites

## The Website Builder to Easily Create Professional Websites :pencil2: :newspaper: :rocket:

**Create a free website with academic-next using Markdown. Choose a beautiful color theme and build anything with Nextjs - over 40 _widgets_ and _themes_ included!**

[Check out the latest **demo**](https://phaneendra.github.com/academic-next) of what you'll get in less than 10 minutes, or [view the **showcase**](https:/phaneendra.github.com/academic-next/#expo) of personal, project, and business sites.

- 👉 [**Get Started**](https:/phaneendra.github.com/academic-next/docs/install/)
- 📚 [View the **documentation**](https:/phaneendra.github.com/academic-next/docs/)
- 🐦 Twitter: [@phaneekr](https://twitter.com/phaneekr)
- Slack: [academic-next.slack.com](https://academic-next.slack.com)
- 💡 [Request a **feature** or report a **bug**](https://github.com/phaneendra/academic-next/issues)
- ⬆️ **Updating?** View the [Update Guide](https:/phaneendra.github.com/academic-next/docs/update/) and [Release Notes](https:/phaneendra.github.com/academic-next/updates/)
- :heart: **Support development** of academic-next:
  - :woman_technologist: [**Contribute**](https:/phaneendra.github.com/academic-next/docs/contribute/)

[![Screenshot](https://raw.githubusercontent.com/phaneendra/academic-next/master/academic-next.png)](https://github.com/phaneendra/academic-next/)

**Key features:**

- **Pages** - Create *anything* with [**widgets**](https:/phaneendra.github.com/academic-next/docs/page-builder/) and [**elements**](https:/phaneendra.github.com/academic-next/docs/writing-markdown-latex/)
- **Edit any type of content** - Blog posts, publications, talks, slides, projects, and more!
- **Create content** in [**Markdown**](https:/phaneendra.github.com/academic-next/docs/writing-markdown-latex/),
- **Plugin System** - Fully customizable [**color** and **font themes**](https:/phaneendra.github.com/academic-next/themes/)
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

Academic-next comes with **day (light) and night (dark) mode** built-in. Click the sun/moon icon in the top right of the [Demo](https://phaneendra.github.com/) to see it in action!

Choose a stunning color and font theme for your site. Themes are fully customizable and include:

| `default`                                                                                                    | `ocean`                                                                                                  | `forest`                                                                                                   | `dark`                                                                                                 |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| ![default theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-default.png) | ![ocean theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-ocean.png) | ![forest theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-forest.png) | ![dark theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-dark.png) |

| `apogee`                                                                                                   | `1950s`                                                                                                  | `coffee`                                                                                                            | `strawberry`                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![apogee theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-apogee.png) | ![1950s theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-1950s.png) | ![coffee theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-coffee-playfair.png) | ![cupcake theme](https://raw.githubusercontent.com/phaneendra/academic-next/master/images/theme-strawberry.png) |

[Browse more themes...](https:/phaneendra.github.com/academic-next/themes/)

## Install

You can choose from one of the following four methods to install:

- **one-click install using your web browser (recommended)**
- install on your computer using Git with the Command Prompt/Terminal app
- install on your computer by downloading the ZIP files

### Install with web browser

[Install Academic-next with Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/phaneendra/academic-next)

- One-click install of Academic-next creates an `academic-next` repository in your GitHub or GitLab account
- Netlify will provide you with a customizable URL to access your new site, [or get your own domain](https:/phaneendra.github.com/academic-next/docs/domain/)
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

For inspiration, refer to the [Markdown content](https://github.com/phaneendra/academic-next/tree/master/exampleSite) which powers the [Demo](https://phaneendra.github.com/academic-next).

If you wish to initialise your site with the demo content, copy the contents of the `themes/academic-next/exampleSite/` folder to your website root folder, overwriting existing files if necessary. The `exampleSite` folder contains an example config file and content to help you get started. The following command can be used to accomplish this:

```bash
cp -av themes/academic-next/exampleSite/* .
```

## Get Started

[View the guide to Personalize and Deploy your new site](https:/phaneendra.github.com/academic-next/docs/get-started/).

## Updating

[View the Update Guide](https:/phaneendra.github.com/academic-next/docs/update/).

Feel free to *star* the project on [Github](https://github.com/phaneendra/academic-next/) and follow [@phaneekr](https://twitter.com/phaneekr) on Twitter to help keep track of [updates](https:/phaneendra.github.com/academic-next/updates).

## License

Copyright 2019-present [academic-next](https://phaneendra.github.com).

Released under the [MIT](https://github.com/phaneendra/academic-next/blob/master/LICENSE.md) license.