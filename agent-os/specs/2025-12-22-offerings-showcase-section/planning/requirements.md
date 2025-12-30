# Spec Requirements: Offerings Showcase Section

## Initial Description
Create an offerings showcase section on the homepage that displays Lumhara's workshops, mini-courses, and other services, with a featured upcoming event at the top and a card-based grid below.

## Requirements Discussion

### Featured Offer Section

**Q1:** What should be featured in the featured offer section?
**Answer:** The next upcoming event. The first one is a free lunch workshop at White Rabbit Clubhouse in Ashland, OR, with the title "Intro to Human Design" on 1/30/26 from 12-1pm.

**Q2:** What information should the featured offer include?
**Answer:** 
- Title: "Intro to Human Design"
- Description: Ask everyone to look at their chart. Talk about the history of Human Design, how it was created, what it is and what it's not, Centers, how channels are created. Leave time for questions and answers.
- Date: 1/30/26 from 12-1pm
- Location: White Rabbit Clubhouse in Ashland, OR
- Format: Free lunch workshop
- CTA button option

### Workshops

**Q3:** What are the workshop details?
**Answer:**
- Format: One-off workshops, 1.5hrs total (1 hour presentation, 30 mins QA and practical application)
- Available in both live and online versions
- Examples:
  1. "Intro to Human Design" (upcoming on 1/30/26)
  2. "Types, Strategies & Authorities" (future workshop) - Learn more about what their type and strategy is and how to apply that to their lives. In addition, learn basics about "Authorities" as a way of determining how to navigate choices and decisions that come up on the daily.

**Q4:** What information should each workshop card include?
**Answer:**
- Title
- Description
- Duration: 1.5hrs (1 hour presentation, 30 mins QA and practical application)
- Format: Live and/or online versions
- Date (if upcoming) or "Available now" (if evergreen)
- Location (for live events)
- CTA button
- Optional image on top of card

### Mini-Courses

**Q5:** What are the mini-course details?
**Answer:**
- Format: 2 classes a week apart with homework and reflection in between
- Structure:
  1. First class: Talking about, if they have it, ways to recognize that authority inside of us
  2. Second class: Methods for calibration of the authorities (working in groups, sensei talks and demonstrates, students put it into practice)
- Concept: Workshops and courses as part of a "Dojo" experience
- Focus: Mini-courses on each authority
- Duration: 2 classes a week apart

**Q6:** What information should each mini-course card include?
**Answer:**
- Title (e.g., "Emotional Authority Mini-Course", "Sacral Authority Mini-Course", etc.)
- Description
- Duration: 2 classes a week apart
- Format: Live and/or online versions
- CTA button
- Optional image on top of card

### Other Offerings

**Q7:** What other offerings should be included?
**Answer:**
- Bespoke one-on-one deep dives: Coaching based on systems, applying it to real world situations
- Business consulting: Possibly (to be determined)
- Future: Chart creation offer (not available yet - don't include for now)
- Price: Done hourly, but don't show price for now

**Q8:** What information should other offering cards include?
**Answer:**
- Title
- Description
- Format: One-on-one, consulting, etc.
- CTA button
- Optional image on top of card

### Visual Design

**Q9:** How should the offerings be displayed?
**Answer:**
- Card-based grid layout
- Featured offer at the top (prominently displayed)
- Other offerings displayed below in a grid
- Option for image on top of each card
- Order: What's up and coming first, then evergreen offers

**Q10:** Should prices be displayed?
**Answer:** No, don't show prices for now.

**Q11:** Should there be CTA buttons?
**Answer:** Yes, option for CTA button on each offering.

## Requirements Summary

### Functional Requirements
- Featured offer section at the top highlighting the next upcoming event
- Card-based grid layout for other offerings below
- Support for images on cards (optional)
- Order offerings: Upcoming events first, then evergreen offers
- Include CTA buttons for each offering
- Display workshops, mini-courses, one-on-one deep dives, and business consulting
- Do not display prices
- Support for both live and online versions of workshops/courses

### Content Requirements

**Featured Offer:**
- Title: "Intro to Human Design"
- Description: Ask everyone to look at their chart. Talk about the history of Human Design, how it was created, what it is and what it's not, Centers, how channels are created. Leave time for questions and answers.
- Date: 1/30/26 from 12-1pm
- Location: White Rabbit Clubhouse in Ashland, OR
- Format: Free lunch workshop
- CTA button

**Workshops:**
- Format: One-off, 1.5hrs (1 hour presentation, 30 mins QA and practical application)
- Available in live and online versions
- Examples:
  1. "Intro to Human Design" (upcoming)
  2. "Types, Strategies & Authorities" (future)

**Mini-Courses:**
- Format: 2 classes a week apart with homework and reflection
- Focus: Mini-courses on each authority
- Concept: Dojo experience (sensei talks and demonstrates, students practice)

**Other Offerings:**
- Bespoke one-on-one deep dives
- Business consulting (possibly)

### Visual Requirements
- Card-based grid layout
- Featured offer prominently at top
- Other offerings in grid below
- Optional images on cards
- Responsive design (mobile, tablet, desktop)
- Match tranquil, minimal aesthetic

### Technical Requirements
- Regular HTML/CSS implementation (not web component for now)
- Use existing section styling patterns
- Responsive breakpoints: mobile (max-width 768px), tablet (769px-1024px), desktop (1025px+)
- Use existing CSS variables for colors and spacing
- Match typography choices (Georgia for headings, Lato for body)

### Scope Boundaries

**In Scope:**
- Featured offer section
- Card-based grid for offerings
- Support for images on cards
- CTA buttons
- Responsive design
- Ordering by upcoming/evergreen

**Out of Scope:**
- Price display
- Booking/payment integration
- Calendar integration
- User accounts or login
- Backend functionality
- Chart creation offer (future feature)


