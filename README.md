<img src="https://i.imgur.com/QgojyYY.png" width="400">

# Project 2<br>Node/Express/MongoDB<br>Full-stack CRUD Application

## Overview

This second project will be your first adventure into **building a full-stack application.** You'll be **building a Node/Express/MongoDB app** from the ground up.

You get to decide what you want to build - as long as it meets the technical requirements outlined below.

**You will be working individually for this project.** You'll be designing and coding the app yourself.

---

## Planning & Technical Requirements

### Planning - Due by **Friday, May 26th at 9AM ET**:

- A **[Trello](https://trello.com/) board** with:
    
    ☐ **A Clear Plan of Attack for your project** - How you go about this is up to you, but we should be confident in your plan atfer reviewing your Trello board.

    ☐ A **Wireframes** list containing wireframes for the app's main pages of functionality, e.g. Landing Page, Posts Index Page, Favorite Posts Page, Add Post Page, etc.
    
    ☐ An **ERD** list containing an ERD identifying the attributes of each Data Entity (one for each Model and embedded schema). The ERD also needs to diagram relationships between the Entities (1:1, 1:M or M:M). Here's a [YouTube video to show you how](https://www.youtube.com/watch?v=QpdhBUYk7Kk).

- **A ``README.md`` file** - Don't underestimate the value of a well crafted `README.md`. The `README.md` introduces your project to prospective employers and forms their first impression of your work!

### Project Completion - Due by **Friday, June 2nd at 1:30PM ET**:

### Your App Must:

☐ **Have at least 2 data entities (data resources) in addition to the `User` Model** - one entity that represents the main functional idea for your app and another with a **One:Many** or **Many:Many** relationship with that main entity (embedded or referenced).

☐ **Use OAuth authentication**.

☐ Implement basic **authorization** that restricts access to features that need a logged in user in order to work (typically CUD data operations) by "protecting" those routes from anonymous users using the `ensureLoggedIn` middleware from the OAuth lesson.  In addition, ensure that editing and deletion of a data resource can only be done by the user that created that data (this is done in the controller - refer to the Guide to User-Centric CRUD).

☐ Have **full-CRUD data operations** somewhere within the app's features. For example, you can have functionality that **C**reates & **U**pdates a _post_ and satisfy **D**elete functionality by implementing the ability to delete _comments_.

☐ Be styled such that the app looks and feels similar to apps we use on a daily basis - in other words, **it should have a consistent and polished user interface.**

☐ Be **deployed online** (Heroku).

### Optionally, Your App May:

☐ Consume a third-party API.  If you choose to implement this option, it's likely that the data from the API will be a key data resource in your app, therefore it's important to consider how to implement whatever CRUD data operations will apply.  For example, how will data from the API find its way into your database?  Be sure to discuss with an instructor when planning your app's features.

☐ Expose its own API where it returns data resources as JSON.

---

## Necessary Deliverables

☐ **A working full-stack app that meets or exceeds the above technical requirements, built by you, and hosted on Heroku**.

☐ **Daily commits (the more the better) dating back to the very beginning of the project**. Commit messages should be in the present tense, e.g., "Style landing page" instead of "Styled landing page". **Do not "start over" with a new repo.**

---

## Getting Started

- **Discuss your app idea with an instructor to get their feedback before you dive too deep into user stories and wireframes.**
- Because your app's functionality revolves around the logged in user, **implement authentication and basic navigation first!**
- **Prioritize and implement the user stories one at a time**.
- **Remember to keep things small and focus on the MVP** – feature creep can doom a project!

---

## Project Idea Guidance

Lots of the web applications you interact with on a daily basis can provide inspiration for this project as most are full-stack CRUD apps.  That is, they manipulate and display data.

#### DO NOT Choose Non-CRUD Applications Such As:

- Games
- Portfolio, or presentational pages
- Marketing or content-oriented websites

#### Good Examples

Some of the best apps are apps that track or manage things of **personal interest to you**:
  
- Music lesson tracking
- Soccer team tracker
- Rock climbing planner

So much of the Internet is CRUD apps!

- Social media:
  - Twitter
  - Instagram
  - Reddit
- Marketplaces: 
  - Craigslist
  - Etsy
- Organizational or Business apps:
  - Home Inventory planner
  - Personal planner
  - Customer management
  - Payroll/Accounting

Many simple apps can have their functionality enhanced by implementing the ability of users to comment on, and/or like/favorite items.

---
