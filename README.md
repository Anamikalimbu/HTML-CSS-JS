#HTML/CSS/JS

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

13. Form
     is a fundamental part of HTML and CSS that allows you to create interactive and user-friendly web pages. Forms are used to collect user input and submit it to a server for processing. They can include various types of input fields, such as text boxes, checkboxes, radio buttons, dropdown menus, and more. Some of the key elements used in creating forms include:
     
        - `<form>`: The main container for the form.
        - `<input>`: Represents an input field where users can enter data. It can have different types, such as text, password, email, submit, button, tel, checkbox, radio, number, url, search, range, date, time, color etc.
        - `<label>`: Provides a label for an input field to improve accessibility and usability.
        - `<textarea>`: Represents a multi-line text input field for longer text entries.
        - `<select>`: Represents a dropdown menu that allows users to select one or more options from a list.
        - `<option>`: Represents an individual option within a `<select>` element.

14. Icon
     is a graphical representation or symbol that is used to convey meaning or represent an action on a web page. Icons are often used to enhance the user interface and improve the overall user experience. They can be created using various methods, such as using images, SVG (Scalable Vector Graphics), or icon fonts. Some popular icon libraries include Font Awesome, Material Icons, and Ionicons, which provide a wide range of pre-designed icons that can be easily integrated into web projects.

15. Background images
     are images that are set as the background of an HTML element using CSS. They can be used to enhance the visual appeal of a web page and create a more engaging user experience. The `background-image` property in CSS is used to specify the URL of the image that you want to use as the background. You can also use additional properties such as `background-size`, `background-position`, and `background-repeat` to control how the background image is displayed within the element. Background images can be applied to various elements, including the entire page, specific sections, or individual components, allowing for a wide range of design possibilities.

16. Transform
     is a CSS property that allows you to rotate, scale, skew, or translate an element in 2D or 3D space. It is commonly used to create dynamic and interactive effects on web pages.

17. z-index
     is a CSS property that controls the stacking order of elements on a web page. It determines which elements are displayed in front of or behind others when they overlap. The z-index property can take integer values, where higher values indicate that an element should be displayed in front of elements with lower values. Elements with the same z-index value will be stacked according to their order in the HTML document, with later elements appearing in front of earlier ones. The z-index property only works on positioned elements (those with a position value of relative, absolute, fixed, or sticky) and does not affect elements with a position of static (the default).

18. Transition
     is a CSS property that allows you to create smooth and gradual changes between different states of an element. It enables you to specify the duration, timing function, and properties that should be transitioned when an element's state changes. By using transitions, you can enhance the user experience by providing visual feedback and making interactions more engaging. For example, you can use transitions to animate the color change of a button when it is hovered over or to smoothly expand a dropdown menu when it is clicked. The transition property can be applied to various CSS properties, such as color, background-color, width, height, opacity, and more, allowing for a wide range of creative possibilities in web design.

19. Cursor
     is a CSS property that specifies the type of cursor to be displayed when the mouse pointer is over an element. It allows you to change the appearance of the cursor to provide visual feedback to users and enhance the user experience. Some common cursor values include:

        - default: The default cursor, typically an arrow.
        - pointer: A hand cursor, often used to indicate a clickable element (e.g., links or buttons).
        - text: An I-beam cursor, used to indicate that text can be selected or edited.
        - move: A cursor that indicates an element can be moved.
        - not-allowed: A cursor that indicates an action is not allowed (e.g., when hovering over a disabled button).
        - wait: A cursor that indicates the user should wait (e.g., when a process is loading).
        - crosshair: A crosshair cursor, often used for precision selection.

20. Animation
     is a CSS property that allows you to create dynamic and engaging visual effects on web pages. It enables you to define keyframes that specify the intermediate steps of an animation, as well as the duration, timing function, and other properties that control how the animation behaves. By using animations, you can enhance the user experience by providing visual feedback, drawing attention to important elements, and making interactions more enjoyable. For example, you can use animations to create a fade-in effect for images, a sliding effect for menus, or a bouncing effect for buttons. The animation property can be applied to various CSS properties, such as opacity, transform, color, and more, allowing for a wide range of creative possibilities in web design.

21. Responsive design
     is an approach to web design that aims to create websites that provide an optimal viewing experience across a wide range of devices and screen sizes. It involves using flexible layouts, images, and CSS media queries to adapt the design and content of a website based on the characteristics of the user's device. Responsive design allows websites to be easily accessible and usable on desktops, laptops, tablets, and smartphones without the need for separate versions of the site. By implementing responsive design principles, you can ensure that your website looks great and functions well for all users, regardless of the device they are using to access it.


# Grid
   is a powerful layout system in CSS that allows you to create complex and responsive web designs with ease. It provides a two-dimensional grid-based layout system, enabling you to arrange elements in rows and columns. 
   With CSS Grid, you can control the placement, size, and alignment of elements within the grid, making it easier to create flexible and adaptive layouts for different screen sizes and devices.
