# Backend Documentation


## Function Documentation

### Pod Creator

#### Parameters
The parameters of the Pod Creator function are two arrays:

* *volList*, a list of *Volunteer* objects
* *stuList*, a list of *Student* objects

The documentation for the *Volunteer* and *Student* objects can be found in the **Classes** section of this page.

Ideally, *volList* and *stuList*'s lengths should be in a 1:x ratio, x being an integer greater than 1 set with the variable "pod_size" located at the top of the file.

#### Return Values

The Pod Creator returns an array of *Pod* objects, each of which has an array of pod members, which starts off with the pod's leader, followed by the pod's members. The number of pod members 

#### Description

### Schedule Creator
***TO BE COMPLETED WHEN FUNCTION IS CREATED***
#### Parameters
#### Return Values
#### Description

### Document Creator

#### Parameters
#### Return Values
#### Description

### Utility Functions


## Classes

There are three classes used in this program: *Student*, *Volunteer*, and *Pods*.


### *Student* and *Volunteer*
*Student* is an object created for each student, containing their name, gender, math class, middle school, and interests. The parameter names are as follows:
* student_objname:
  * **.name** for name
  * **.gender** for gender
  * **.math_class** for math class
  * **.middle_school** for name
  * **.interests** for name

*Volunteer* is an object created for each volunteer, containing their name, gender, math class, middle school, interests, and email. The parameter names are as follows:
* volunteer_objname:
  * **.name** for name
  * **.gender** for gender
  * **.math_class** for math class
  * **.middle_school** for name
  * **.interests** for name
  * **.email** for email

The objects are created thus:

*Student:*
```
object_variable = new Student(name, gender, math_class, middle_school, interests)
```

*Volunteer:*
```
object_variable = new Volunteer(name, gender, math_class, middle_school, interests, email)
```

If any of the fields in the object need to be left blank, enter a **null** in place of the variable.

### *Pod*

*Pod* is an object used to organize pods and their schedules into one object. Its parameter names are as follows:
* pod_objname:
  * **.members** for the list of pod members. The order in which the members are listed is described in the **Pod Creator** section.
  * **.schedule** for the pod's schedule, ordered from Block 1 to Block 4.
