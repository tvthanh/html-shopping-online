SASS Structure Boilerplate
=============

After reading the book [SMACSS](http://smacss.com/) and finding it very helpful I used some of the ideas in my SASS build. I've found breaking the SASS files out into directories (Base, Layout, Modules, and Themes) helps organize your files in a project and compile CSS into a clean, logical file. Each page has a SASS (.scss) file created that acts as a project file that imports the individual modular components from Base, Layout, Modules, and Themes that are needed to build the particular page.

SASS Directories
----------

1.  Base

	The base directory contains styles that help start a project. The base directory could contain the following type of SASS files:
	* Vendor dependancies (Compass, Foundation)
	* Authored dependancies (Mixins, variables)
	* Fonts
	* Reset

2.  Layout

	The layout directory contains styles that are large containers of a page. This directory could include SASS files like:
	* Responsive Grid
	* Page specific layouts

3.  Modules

	The modules directory will probably contain the bulk of your SASS files. A page may consist of multiple modules and should be style individually. These modules may include files like:
	* Header
	* Footer
	* Navigation
	* Content Block

4.  Themes

	The themes directory contains any specific styles that a page may need to change from the generic layout or modules. For example the header in your website maybe green throughout a website or application but on a specific page you want it to change to a blue background that's where the themes files would come in.


