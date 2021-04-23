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

The Pod Creator returns an array of *Pod* objects, each of which has an array of pod members, which starts off with the pod's leader, followed by the pod's members. The number of pod members is determined by the "pod_size" variable at the top of the file.

For further information on the *Pod* object, it is described in further detail within the **Classes** section of the documentation.

#### Description
The Pod Creator first takes in the two arrays of Volunteer and Student objects, and then separates each of them into two subarrays based upon gender called *volList1* and *stuList1* respectively . It then separates these subarrays into further subarrays by math class (*volList2* and *stuList2* respectively), iterating through each of the subarrays to organize them by category.

After the students and volunteers are placed into organized lists, pods are created using the *createPods* function based upon each of the subarrays and then pushed to the pods list, which is then printed and returned to the user. It then writes all the pods in JSON format to the pod_data sheet of the Google Sheet.

### Schedule Creator
#### Parameters
The parameters of the Schedule Creator function is a single array of *Pod* objects. More info can be found in the **Classes** section of the documentation.
#### Return Values
The Schedule Creator returns an array of *Pod* objects, difference being that the "schedule" attribute now contains an array of strings for each teacher which is shuffled in a way that will have an even distribution of teachers.
#### Description
The Schedule Creator function first defines the teachers and a few other variables. It then iterates over the next algorithm for the amount of teachers there are. The algorithm first shuffles the array of *Pods* and then iterates over the array, assigning every 'n'th one to every 'n'th teacher. After it has iterated the main algorithm the amount of times for how many teachers there are, it then returns the new array of *Pods* with the added schedules. It also adds the pods to the teachers' schedules within their teacher objects.

## Class Documentation

There are four classes used in this program: *Student*, *Volunteer*, *Teacher*, and *Pods*.


### *Student* and *Volunteer*
*Student* is an object created for each student, containing their name, gender, math class, middle school, and interests. The parameter names are as follows:
* student_objname:
  * **.name** for name
  * **.gender** for gender
  * **.math_class** for math class
  * **.middle_school** for name
  * **.interests** for name
  * **.email** for email

*Volunteer* is an object created for each volunteer, containing their name, gender, math class, middle school, interests, and email. The parameter names are as follows:
* volunteer_objname:
  * **.name** for name
  * **.gender** for gender
  * **.math_class** for math class
  * **.middle_school** for name
  * **.interests** for name
  * **.grade** for grade
  * **.email** for email

The objects are created thus:

*Student:*
```
object_variable = new Student(name, gender, math_class, middle_school, interests, grade)
```

*Volunteer:*
```
object_variable = new Volunteer(name, gender, math_class, middle_school, interests, grade, email)
```

If any of the fields in the object need to be left blank, enter a **null** in place of the variable.

### *Teacher*

*Teacher* is an object created for the five teachers to organize their rosters and all of their personal information. Their parameter names are as follows:
* **.name** for their surname
* **.room_number** for their room number
* **.class_name** for the class's name

The object is created thus:

*Teacher:*
```
object_variable = new Teacher(name, room_number, class_name)
```

### *Pod*

*Pod* is an object used to organize pods and their schedules into one object. Its parameter names are as follows:
* pod_objname:
  * **.members** for the list of pod members. The order in which the members are listed is described in the **Pod Creator** section.
  * **.schedule** for the pod's schedule, ordered from Block 1 to Block 4.

The Pod object is created thus:
```
object_variable = new Pod(members)
```
