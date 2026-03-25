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


# Grid
   is a powerful layout system in CSS that allows you to create complex and responsive web designs with ease. It provides a two-dimensional grid-based layout system, enabling you to arrange elements in rows and columns. 
   With CSS Grid, you can control the placement, size, and alignment of elements within the grid, making it easier to create flexible and adaptive layouts for different screen sizes and devices.
