# Blog-in-Angular2
I have created  my Blog Application which includes features like :
-Crud operations
-Filtering particular blog by Category of blog.
-Showing favourite blogs.
-Updating or Deleting blog by particular user only.

## Getting Started:
- The starter files set up for use in  WebStorm, or other editors.
  -The node version update is v.8.9.0 and npm  version is v-5.5.1

 ## Prequisites
 -- To run the file you have to download nodemodules,for modular pattern i have used angular/cli.
 --The localhost for ng serve is 4000 and for json-server its 3000
 **To run the app : `cd myblog
                      npm start`
           
### Details and functioning
- My root component is App Component.
-WelcomeComponent is for Home Page , It contains PostComponent used to display recent blogs  added by users.

- AddComponent is used to add new Blog.To add a new blog click on Add option on welcome page.User will enter his details. \*UserName\* should be used for further editing or deleting one's blog with respective username(enter same with casing),after adding it will redirect to \*Welcome page\* (we need to refresh it).

-  EditComponent is used for editing blog, On clicking Edit menu,it will ask for your username and with valid username it will filter the blog along with edit and delete option.
        - Edit button will redirect to update-form ,we can update data from there, after updation  it  will redirect to welcome page.(refresh it).
        -Delete button will delete the blog.(we can check the change on welcome page again by refreshing it).

-For Ratings there is separate  Ratingcomponent.

-FavouriteComponent is used for favourite blogs,on clicking favourite menu on welcome page,blogs are shown in sorted form according to ratings.

-To filter Blog FilterComponent is used,we can filter data by clicking in filter menu on welcome page.We need to enter the category of blog (we can take any of the category from recent blogs on welcome page).
-Validations are on input fields only.
