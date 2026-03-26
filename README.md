# HTML-CSS-JS
   - HTML, CSS, and JavaScript are the three core technologies used to create and design websites.
   - HTML (Hypertext Markup Language) is used to structure the content of a web page, defining elements such as headings, paragraphs, links, images, and more.
   - CSS (Cascading Style Sheets) is used to control the presentation and layout of a web page, allowing you to apply styles such as colors, fonts, spacing, and positioning to HTML elements.
   - JavaScript is a programming language that enables interactivity and dynamic behavior on web pages, allowing you to create features such as form validation, animations, and interactive elements.

## Web
- WWW: World Wide Web
- System of interlinked documents accessed via the Internet using a web browser.
- Web Browser: Software application used to access and view web pages (e.g., Chrome, Firefox, Safari)
- Websites are made of 
         - HTML (Structure)
         - CSS(Styling)
         - JavaScript(Behavior)

## Client-Server Model
- Client: The browser or app that send requests to Server
- Server: Machine that process the requests and send response (HTML, CSS, Data)

## HTML: Hypertext Markup Language

1. Text elements: 
- Headings: `h1` to `h6`
- Paragraphs: `p`
- Bold: `b` or `strong`
- Italic/ Emphasis: `i` or `em`
- subscript: `sub`
- superscript: `sup`
- preformatted text: `pre`
     <pre> for preserving whitespace and line breaks and especially useful for code snippets

2. Links and Media:
- Hyperlinks / Anchors: `a`
                        href="URL"
- Images: `img` src="image.jpg" alt="Description/ or image "
- Videos: `video` src="video.mp4" controls
- Audio: `audio` src="audio.mp3" controls

3. Lists:
- Unordered List: 
       `ul`
        - list:
           - disc: default bullet
           - circle: hollow circle
           - square: solid square
- Ordered List: 
        `ol`
        - list:
             - decimal: default numbering
             - lower-alpha: a, b, c
             - upper-alpha: A, B, C
- List Item: 
        `li`

4. Miscellaneous / Misc:
- Line Break: `br`
- Horizontal Rule: `hr`


5. Table
- `table`
- `td`
- `tr`
- `th`
- `thead`
- `tbody`
- `tfoot`

6. Form
- `form`
- `input` - type="text", "password", "email", "submit", "button", "tel", "checkbox", "radio", "number", "url", "search", "range", "date", "time", "color" etc. is used to create various types of input fields.
- `label`
- `textarea` - can contain long text
- `select` & `option` - dropdown menu

  - common properties in form is 
     - required

7. Inline & Block elements
- Inline elements occupy only the required space.
   - for e.g `a` , `img` , `video` , `span`
- Block elements covers full width of the screen.
   - for e.g `h1` to `h6` , `div`, `p`, `li`

8. Semantics
- All html elements  must be in lower case
- Use proper elements as per their position and usage
- Always add `alt` property in the image tag `img`
- Always add `title` property in button tag especially icon only button
- HTML files names must be in kebab case. 
     - for e.g `hello-world.html`
- In each HTML file/page, there must be at least on `h1` tag.
- Always format ur code.

## CSS Cascading Style Sheet
- Website styling like color, font-size, alignment, spacing

**Syntax**
```
<selector>{
     property: value;
     property: value;
     ...
}
for e.g;
//Element
h1{
     color: red;
     text-align: center;
     font-size: 2rem;
     ...
}
//Class
.title{
     ...
}
#title{
     color: green;
     ...
}
```
**Selectors**
- Selectors are three types:
1. Element: h1, p, div | lowest priority
2. Class: `.class-name` eg `.title`| Priority: Id > Class > Elements
3. ID: `#id-name` eg.`#title`| Highest priority

**Class VS ID**
- For CSS, always use class
- For JS, use id

**CSS Usage**
1. Inline 
2. Internal (not used often)
3. External

### CSS Properties
1. Color, Background Color
2. Text
   is a CSS property that allows you to control the appearance of text on a web page. It encompasses various sub-properties that define the color, alignment, decoration, transformation, spacing, and shadow of the text. By using the text property, you can enhance the readability and visual appeal of your content. Some of the key sub-properties of text include:
 - color : Specifies the color of the text. It can be defined using color names (e.g., "red", "blue"), hexadecimal values (e.g., "#ff0000"), RGB values (e.g., "rgb(255, 0, 0)"), or HSL values (e.g., "hsl(0, 100%, 50%)").
 - text-align : "center", "right", "left", "justify" is used to align the text within its container.
 - text-decoration : "underline","wavy"
 - text-transform : "uppercase", "lowercase", "capitalize"
 - word-spacing
 - letter-spacing
 - text-shadow : x-axis y-axis spread color
 - line-height

3. Font 
    is a CSS property that allows you to control the appearance of text on a web page. It encompasses various sub-properties that define the font's size, family, weight, and style. By using the font property, you can enhance the readability and visual appeal of your content. Some of the key sub-properties of font include:
  - font-size : Specifies the size of the font, which can be defined in various units such as pixels (px), ems (em), rems (rem), percentages (%), or keywords (e.g., small, medium, large).
  - font-family : Defines the typeface or font family to be used for the text.
  - font-weight : Controls the boldness of the font. It can take values such as normal, bold, bolder, lighter, or numeric values (100 to 900).
  - font-style : Controls the style of the font. It can take values such as normal, italic, or oblique.

4. Box model: 
    is a fundamental concept in CSS that describes the rectangular boxes generated for elements in the document tree and how they are laid out on the page. Each box consists of four areas:
   - content: The innermost area that contains the actual content of the element, such as text or images.
     - width
     - height
   - margin: The outermost area that creates space between the element and its neighbors. Margins are transparent and do not have a background color.
   - padding: The area between the content and the border of the element.
   - border: The area around the padding that defines the shape and appearance of the element.

5. Display
   - inline : occupies only the required space and does not start on a new line.
   - inline-block : occupies only the required space but starts on a new line. 
   - none : hides the element and it does not take up any space in the layout.
   - block : occupies the full width of the parent container and starts on a new line.

6. Flex
     is a one-dimensional layout system in CSS that allows you to create flexible and responsive web designs. It provides a way to arrange elements in a container, either horizontally or vertically, and control their alignment, spacing, and distribution. 
     With CSS Flexbox, you can easily create complex layouts that adapt to different screen sizes and devices, making it an essential tool for modern web development.

7. List
   is a fundamental part of HTML and CSS that allows you to create structured and organized content on web pages. Lists are used to group related items together, making it easier for users to read and understand the information presented.
     - list-style-type: "disc", "circle", "square", "decimal", "lower-alpha", "upper-alpha"
     - list-style-position: "inside", "outside"

8. Units
     are used in CSS to specify the size, length, or distance of various properties. They help define the dimensions and spacing of elements on a web page. Some common CSS units include:
     
          - Absolute Units: These units are fixed and do not change based on the context. Examples include:

             - px (pixels): A pixel is a unit of measurement that represents a single point on the screen. It is commonly used for defining font sizes, margins, and other dimensions.
             - cm (centimeters): A centimeter is a unit of measurement that represents a physical length. It is less commonly used in web design but can be useful for print stylesheets.
             - mm (millimeters): A millimeter is a unit of measurement that represents a physical  length. Like centimeters, it is less commonly used in web design.
             - in (inches): An inch is a unit of measurement that represents a physical length. It is also less commonly used in web design.
             - pt (points): A point is a unit of measurement that represents 1/72 of an inch. It is commonly used in typography for defining font sizes.
             - pc (picas): A pica is a unit of measurement that represents 12 points or 1/6 of an inch. It is also used in typography but is less common in web design.
             - Relative Units: These units are relative to the context in which they are used. Examples include:
             - em: An em is a relative unit that is based on the font size of the  element. 1em is equal to the current font size, so if the font size is 16px, then 1em would be 16px.
             - rem: A rem is a relative unit that is based on the font size of the root element (usually the `html` element). 1rem is equal to the font size of the root element, so if the root font size is 16px, then 1rem would be 16px.
             - % (percentage): A percentage is a relative unit that is based on the size of the parent element. For example, if you set the width of an element to 50%, it will take up half the width of its parent container.

9. Pseudo-class
     is a keyword added to selectors that specifies a special state of the selected elements. It allows you to apply styles to elements based on their state or position in the document tree. Some common pseudo-classes include:
     - :hover: Applies styles when the user hovers over an element with a pointing device (e.g., mouse).
     - :active: Applies styles when an element is being activated (e.g., clicked).
     - :focus: Applies styles when an element has focus (e.g., when a user clicks on an input field or navigates to it using the keyboard).
     - :nth-child(n): Applies styles to the nth child of a parent element.
     - :first-child: Applies styles to the first child of a parent element.
     - :last-child: Applies styles to the last child of a parent element.

10. Overflow
     is a CSS property that controls how content that exceeds the dimensions of its container is handled. It allows you to specify whether the content should be clipped, hidden, or scrollable. The overflow property can take the following values:
        - visible: This is the default value. Content that exceeds the container's dimensions will be visible and may overflow outside of the container.
        - hidden: Content that exceeds the container's dimensions will be clipped and hidden from view. The overflowed content will not be accessible or visible.
        - scroll: Content that exceeds the container's dimensions will be clipped, but scrollbars will be added to allow users to scroll through the hidden content.
        - auto: If the content exceeds the container's dimensions, scrollbars will be added only if necessary. If the content fits within the container, no scrollbars will be displayed.

11. Position
     is a CSS property that specifies how an element is positioned in the document. It allows you to control the layout and placement of elements on a web page. The position property can take the following values:
        - static: This is the default value. Elements are positioned according to the normal flow of the document, and they are not affected by top, bottom, left, or right properties.
        - relative: Elements are positioned relative to their normal position in the document flow. You can use top, bottom, left, and right properties to adjust their position.
        - absolute: Elements are positioned relative to their nearest positioned ancestor (an ancestor with a position other than static). If there is no such ancestor, they are positioned relative to the initial containing block (usually the viewport). You can use top, bottom, left, and right properties to specify their exact position.
        - fixed: Elements are positioned relative to the viewport and do not move when the page is scrolled. You can use top, bottom, left, and right properties to specify their exact position.
        - sticky: Elements are positioned based on the user's scroll position. They toggle between relative and fixed positioning depending on the scroll position.

12. Table
     is a structured way to display data in rows and columns on a web page. It is created using the `<table>` element in HTML, along with various sub-elements to define the structure and content of the table. Some of the key elements used in creating tables include:
        - `<table>`: The main container for the table.
        - `<tr>`: Represents a table row.
        - `<td>`: Represents a table cell that contains data.
        - `<th>`: Represents a table header cell, which is typically used for column or row headers.
        - `<thead>`: Groups the header content of the table.
        - `<tbody>`: Groups the body content of the table.
        - `<tfoot>`: Groups the footer content of the table.

# Grid
   is a powerful layout system in CSS that allows you to create complex and responsive web designs with ease. It provides a two-dimensional grid-based layout system, enabling you to arrange elements in rows and columns. 
   With CSS Grid, you can control the placement, size, and alignment of elements within the grid, making it easier to create flexible and adaptive layouts for different screen sizes and devices.
