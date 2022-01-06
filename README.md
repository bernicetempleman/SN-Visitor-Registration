# ServiceNow-Visitor-Registration

- Custom table for visitor registration
- Requirement to not allow visitors previously banned by security
- RAs will check guests in and out at computer at front entrance to dorms

## Technologies Used
- ServiceNow
- IT Service Management
- ITIL
- JavaScript

## Features

List of features ready and TODOs for future development
- Security are employees with user accounts, roles and additional access
- RAs are University employees with an existing user account and roles
- Students have user accounts but are not employees and do not have roles
- Guests do not have user accounts
- Notify RA and Security groups when new visitor record created
- Autopopulate name, phone and emergency contact name & phone if email on previous visit record
- Autoflll assigned to and company

To-do list:
- Determine if notifications are needed and when
- Determine if there are any checkout time requirements
- Should new visit be auto-populated? What fields need to be filled out? 
- Create a custom visitor user table (can't log in) for contact info/ auto populate visitor info when visitor task created

## Getting Started

## Usage

### Resident Advisor account example
![image](https://user-images.githubusercontent.com/12488769/147842304-593576ab-7964-440b-97bd-bd2af51e24e7.png)

### Security account example
![image](https://user-images.githubusercontent.com/12488769/147842319-7961b27b-64d0-4abb-8810-22d035db8b5a.png)

### No role account example
![image](https://user-images.githubusercontent.com/12488769/147842331-e8fb7262-8258-40f3-ab51-20788b89a370.png)

### Admin view of Table
![image](https://user-images.githubusercontent.com/12488769/147842376-fdcb8331-e47f-4a46-9d40-0e9424aa575b.png)

![image](https://user-images.githubusercontent.com/12488769/147842405-6cc15e6d-e96a-4215-9d1d-a87b88b5cb3c.png)

![image](https://user-images.githubusercontent.com/12488769/147842420-54015856-6196-4284-aa8f-f2b3b2c21318.png)

![image](https://user-images.githubusercontent.com/12488769/147842434-97923a75-e663-425d-b68a-7d47d63b080f.png)

### New Visitor Registration by RA
![image](https://user-images.githubusercontent.com/12488769/147842498-76699680-555b-474b-828a-6013dca86026.png)

![image](https://user-images.githubusercontent.com/12488769/147842509-44c0652d-6f81-45fc-bf01-65416f5ec3d5.png)

![image](https://user-images.githubusercontent.com/12488769/147842531-d37d8c89-5327-462e-8824-3a98a95864bb.png)

![image](https://user-images.githubusercontent.com/12488769/147842544-4d9e9f57-fa97-4ee6-a29d-a524e3e4affc.png)

![image](https://user-images.githubusercontent.com/12488769/147842553-ffa199e1-b503-4610-9ed4-21e109786013.png)

![image](https://user-images.githubusercontent.com/12488769/147842561-82500ce8-4243-421c-8e2f-dceecd7da9ca.png)

### Aborted due to previous security ban found
![image](https://user-images.githubusercontent.com/12488769/147842642-3c08b303-1a67-424c-98ef-dbb2fa4d6d32.png)

### Successful Visitor Added
![image](https://user-images.githubusercontent.com/12488769/147842699-f212415e-4306-4947-86e4-66d1b903d978.png)

### RA group and Security group notified of visitor
![image](https://user-images.githubusercontent.com/12488769/148091539-92106eed-ade5-464e-ab93-ba5825fb848b.png)

![image](https://user-images.githubusercontent.com/12488769/148091201-b2aaacf8-7332-465b-ae4f-df392edaa481.png)


### Visit end time needs updated before close
![image](https://user-images.githubusercontent.com/12488769/147842728-5866a790-f22e-44f7-add2-e9194daf8b14.png)

### Successful Close
![image](https://user-images.githubusercontent.com/12488769/147842746-963ea632-d089-4f0f-a5c9-0569c55ec59f.png)

### Create Incident from Visitor record
![image](https://user-images.githubusercontent.com/12488769/147842797-384a4986-2c0c-422e-aebf-7c38fea6e4a2.png)

![image](https://user-images.githubusercontent.com/12488769/147842810-d460b532-3718-4c7f-8c60-ffdfb77c5a83.png)

![image](https://user-images.githubusercontent.com/12488769/147842826-f75f7ae0-6285-4929-b552-13961358a572.png)

![image](https://user-images.githubusercontent.com/12488769/147842845-92471595-efaa-47cd-a631-f85230f76351.png)

### Security has permission to ban a visitor from future visits
![image](https://user-images.githubusercontent.com/12488769/147842869-e8d7445f-adae-4f9c-9fee-605f5df76be6.png)


## Contributors
Here list the people who have contributed to this project. 
- Bernice Templeman

## Roles and Responsibilities
- Worked on ServiceNow developer to design a form, access, and scripts.
- Created custome visitor table extended from task
- Customized ACL Access Control list permissions on table and field for different roles
- Created users, groups, and roles
- Wrote script include to store JavaScript functions and classes for use by server scripts.
- UI policies, UI actions, client scripts, and business rules
- Customized child form buttons by overriding parent

## License
This site was built using [GitHub](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links).

This project uses the following license: [license_name](https://github.com/bernicetempleman/PROJECT-NAME).
