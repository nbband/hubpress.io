Tantum - A dark portfolio theme for Ghost
===

Theme name:      Tantum
Version:         1.1.0
Release date:    March 3, 2014
Contact:         [Themeforest](http://themeforest.net/user/layoutcake)
Demo:            [Tantum](http://demo.janniskev.in/ghost/tantum)
License:         [Split license](http://support.envato.com/index.php?/Knowledgebase/Article/View/428)


# Version history

Here you can find an overview of the history of this theme.

- 1.0.0: March 3, 2014
    - Initial release
- 1.0.1: March 5, 2014
    - Fixed an issue where content would dissapear on detail page
- 1.1.0: April 21, 2014
    - Updated theme to Ghost v0.4.2


# Introduction

First of all I would like to thank you for purchasing this theme and I hope it suits your needs.

If anything is unclear or not specified in this documentation, you would like to see new features added
or have improvements for this theme then get in touch with me so I can add this.
We both benefit from a better theme!


# Getting started

## Installation

1. Move the extracted 'tantum' folder to your Ghost installation and place it at: 'content/themes/'.
2. Login to your Ghost admin panel and click on 'Settings'.
3. Scroll all the way to the bottom and select 'tantum' as your theme.
4. Congratulations, you have installed this theme!

## Menu setup

If you would like a menu in your blog then you can easily edit this.
The menu structure is defined in 'tantum/partials/navigation.hbs'.

Each link in the menu is added like the following:

    <a href="URL TO PAGE">MENU ITEM NAME</a>

Update 'URL TO PAGE' to the page you would like, and change 'MENU ITEM NAME' to the caption of the menu item.
You can add more than 3 links if you want. Or less, whatever suits your needs.

Note: if you don't want a menu, simply remove all content in 'tantum/partials/navigation.hbs'.
Do not remove this file, as removing it will break the theme.

## Analytics setup

Most sites would like to track the visits they get on their site.
If you do not want analytics in your site, simply ignore this section and move on to the next one.

You can do this as well by adding you analytics code (Google or other) in the file located at: 'tantum/partials/analytics.hbs'. This code will automatically be added to the bottom of each page, so you can be sure that you track every visited page.

## Disquss setup

There is an ability built in to use disquss in this theme. The code is already added in 'tantum/partials/disquss.hbs'. The only thing you need to do is set the disquss_shortname variable. Replace ### with your forum shortname to enable disquss.

Note: if you don't want to use disquss, remove all content in 'tantum/partials/disquss.hbs'.
Do not remove this file, as removing it will break the theme.


# Content guidelines

I would like to take this opportunity to inform you about some content guidelines. This way you can be sure your theme will look the best possible way.

## Post previews and header images

You can create thumbnail on the homepage with and without a preview image. Be aware that when you select a preview image it will also be placed in the header on the detail of the page or post.

It is recommended that you upload images that are at least 1280x960 in size, to be sure that the header images will look good and not blurry or pixelated on large screens.

An image can be added with the following code in markdown:

    ![DESCRIPTION](LINK TO IMAGE)

It is recommended that you don't use big header titles in your post or page content,
this will not look nice on the detail page.

Please don't use the following code in a post or page content:

    # Some big header

    Another big header
    ===

## Post tags

This theme has the unique ability to filter posts on the homepage. The filtering is based on tags. I would recommend that you set no more than 5 different tags across your posts and pages.

The filtering by text is done on the post title, so provide meaningful titles so people can find your posts when they search for it.


# Third party assets

There are several assets linked in this theme which come from third party vendors.
These assets are listed and linked below.

## Fonts

- [Oswald](https://www.google.com/fonts/specimen/Oswald)
- [Source Sans Pro](http://www.google.com/fonts/specimen/Source+Sans+Pro)
- [Lily Script One](http://www.google.com/fonts/specimen/Lily+Script+One)

## Javascript Plugins

- [Fitvids](https://www.github.com/davatron5000/FitVids.js/)
- [Wookmark](http://www.wookmark.com/jquery-plugin)
- [HighlightJS](http://www.highlightjs.org/)
- [Moment](http://www.momentjs.com)
