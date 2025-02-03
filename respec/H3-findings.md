# Main findings

## Lab questions

The lab phase starts with the basic, fundamental questions. Why do I want a DT and to which guardrails and principles should the LDT adhere?

### How do we avoid lock-ins?

__Best practices__

- Use Open International Standards.

    Open standards are a way to enable systems to be interoperable and to avoid lock-in.


### How do we make sure our solution is re-usable?

__Best practices__

- Driven by and from use-case

    Even from technical framework viewpoint, a socio-technical approach should be expected. 


### How do we make sure our solution is interoperable with other organisations?

__Best practices__

- 'The web is the operating system'

    Modern architectures operate on a web-scale and can work in a distributed environment.


### How do we create insights that are interpretable and well balanced?

__Best practices__



### How can we create results in the short term, while staying relevant towards the future?

__Best practices__

- Work with the best that is available today (affordable, reliable, scalable & resilient)

---

## Studio questions

The studio phase focusses on the capabilities. Which building blocks do we need to define.

### Which capabilities do we need to find, operate and interrogate our data sources?

__Best practices__

- Have a Datacentric mind, rather than a software centric mind. 
- Have FAIR (Findable, Accesible, Interoperable, Re-usable) principles in mind.

### Which capabilities do we need to combine, validate and verify our data sources?

__Best practices__

- Well defined, clearly scoped interfaces help with the interoperability between components.


### Which capabilities do we need to gain insights from our data sources?

__Best practices__

- Thinking in terms of capabilities or functions enables you to compare different building blocks or solutions from vendors. In that way it facilitates working towards value creation, rather than solution adoption.

### Which capabilities do we need to make sure we can trust the insights we get from our data sources?

__Best practices__

- Reach out to policy makers, make sure the results from a DT a relateable to the policies they are supposed to make understandable.

### How do we communicate our insights to our stakeholders?

__Best practices__

- Understand your stakeholder needs. The experience needs to be useful for the target audience.

### How do we manage the complexity of a solution and make sure we can 'mix and match' different building blocks?

__Best practices__

- The architecture we promote is composed of different building blocks:
    - Data
    - Processing
    - Visualisation
    - Foundation

By splitting the system in different building blocks (which are based on standards and interoperable interfaces) we make sure the system is flexible. We can use for example different visualisation solutions with a processing backend, and we can upgrade certain parts without needing to upgrade the complete system.


---

## Arena questions

The Arena phase is all about the questions regarding the actual implementation of capabilities in applications and processes.

### What kind of visualisation interface do I need to communicate my insights to the users? 
Does it need to be a 3D viewer, or is a 2D or a chart sufficient?

__Best practices__

- A responsive, userfriendly 3D environment helps with the adoption of the technology stack.
 

### How does my data storage landscape look like? 
Which tools do I need to provide the right dataservices to my models or visualisation tools.

__Best practices__

- A cloud based technology stack has different requirements compared to a 'classic' on-premise technology stack. 
    
__Lessons Learned__

- cloud native, serverless components bring vendor lock-in. Containerable, 'independent' solutions need a higher skill-set but enable flexibility.
- block based storage solutions are cost effective, flexible and easy to manage but require different interfaces than the classical file based access paradigm.

### How do I make sure my users can actually find the right datasources, models, dashboards?
What type of catalogue do I need, how proficient are my users in searching and finding products.

__Best practices__

### How do I make sure the different components in my landscape can actually 'talk' to eachother?

__Best practices__

### Which systems do I need to have in place to support my data governance processes?
Make sure your technical system aligns with the operating model of your organisation.

__Best practices__

- Components are containerable, developer friendly.
Think in terms of current (cloud) technology practices. Disposability of components, cattle vs pets.

- Components (Products) are loosely bound and talk to each other over API’s.
Design your systems decoupled. That is not to say, data and visualisation should always be 'physically' separated.

- Avoid pre-optimalisation
In this fast moving innovative world it is sometimes tempting to do too much in terms of optimalisation for future possible functionality.
Be aware that innovation is unpredictable a try to built 'just enough'.

---

## Agora questions

The Agora phase is focussing on the implementation and deployment of LDT's in production. Focussing on wider use, stability, trustworhyness etc.

### How do I want my deployments to be rolled out to users?

__Best practices__

### Do I need tutorial systems like disposable environments to educate my users?
Do I have a centralized system, what does my application environment and management thereof look like?

__Best practices__

### What type of Service Level Agreements (SLA's) do I have internally and externally? 
What type of availability is actually necessary, what about backup/restore.

__Best practices__

### Do I have the rigt security frameworks in place?
Both in terms of GDPR (privacy) and NIS2 (cybersecurity)

__Best practices__

### Do I have observability in place to monitor my systems in terms of cost, incidents, performance etc.?

__Best practices__



