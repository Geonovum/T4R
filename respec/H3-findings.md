# Main findings

## Lab questions

The lab situation starts with the basic, fundamental questions. Why do I want a DT and to which guardrails and principles should the LDT adhere?

For each 

### How do we avoid lock-ins?

__Best practices__

- Use Open International Standards.

    Open standards are a way to enable systems to be interoperable and to avoid lock-in.

- There is a clear difference between Open Standards, Open Licenses and Open Source. Adhering to Open Standards makes sure systems are interoperable. Open Licenses and Open Source are not technically necessary to enable interoperability, but might provide other benefits to the envisioned solution.

- The dutch government implements a 'comply or explain' policy for certain standards (Pas toe of Leg Uit). This approach facilitates the adoption of certain standards to improve interoperability and compliance. Besides the 'comply or explain' policy, there is also a 'recommended' list of standards.

### How do we make sure our solution is re-usable?

__Best practices__

- Driven by and from use-case

    Even from a technical framework viewpoint, a socio-technical approach should be expected. 

__Lessons learned__

- Having 'amabassadors' or 'champions' in your organisation that promote solutions and can enthousiastically demonstrate the use and adoption of LDT's is a huge benefit and success factor.


### How do we make sure our solution is interoperable with other organisations?

__Best practices__

- 'The web is the operating system' 
By this we mean that web technology is the fundamental approach to design systems, not only for the visualisation part, but also all other parts of the system, like storage and processing.

__Lessons Learned__
    Modern architectures operate on a web-scale and can work in a distributed environment, technologies like WebAssembly and memory optimized architectures make scaling systems a lot more feasible. 


### How do we create insights that are interpretable and well balanced?

__Best practices__

- documentation and clear definitions are key. Design systems in such a way that provenance is available and results are transparant. Be wary of 'black box' solutions where you do not have a clue how results are calculated.

### How can we create results in the short term, while staying relevant towards the future?

__Best practices__

- Work with the best that is available today (affordable, reliable, scalable & resilient)

__Lessons learned__

- Pay attention to agile development practices, deliverables should add value. But also take 'technical debt' into account. Be aware that system components need maintenance as well and reserve development time for a solid foundation.

---

## Studio questions

The studio situation focusses on the capabilities. Which building blocks do we need to define.

<img src="./respec/media/capabilities.png" alt="Main capabilities mapped to the Digital Twin Capabilities Periodic Table" width="900">

Main capabilities mapped to the Digital Twin Capabilities Periodic Table

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

__Lessons Learned__
Critical succesfactors comprise of concrete, understandable building blocks. By adopting an agile mindset a roadmap can be realized in smaller steps which deliver value in their own rights.

An area that needs further research revolves around quantifiable key performance indicators that are comparable accross different organisations. 


---

## Arena questions

The Arena situation is all about the questions regarding the actual implementation of capabilities in applications and processes.

### What kind of visualisation interface do I need to communicate my insights to the users? 
Does it need to be a 3D viewer, or is a 2D or a chart sufficient?

__Best practices__

- A responsive, userfriendly 3D environment helps with the adoption of the technology stack.

__Lessons Learned__

- An accessible 3D environment can help very much in creating support in a community and explain proposed scenarios. Bear in mind that a 'high definition' simulated environment can also set certain expectations that you do not want to set just yet. Sometimes a generic, not too detailed scene is advisable to communicate the uncertainty around future scenarios.

- Coordinate system alignment is not a given. While solutions might start isolated, once you want to combine different parts together it is imperative to make sure visualisations actually align by adhering to collective coordination system definitions.
 

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
The use of OGC and W3C standards to describe and expose datasources help interoperability, understanding and reuseability of those datasources.

Specifically:
- DCAT-AP (European dcat application profile) and relevant extension to the european profile. (GeoDCAT-AP, MobilityDCAT-AP, DCAT-AP-NL, ...)
- OGC API records for describing catalogues 
- SPARQL for querying linked data

### How do I make sure the different components in my landscape can actually 'talk' to eachother?

__Best practices__

Use OGC API standards to facilitate interoperability

- OGC API Feature, Tyles, Maps
- OGC API Processes

__Lessons Learned__

- While an architecture based on OGC API's is viable in many use cases, in more advanced scenario's involving for example high throughput 3D analysis and rendering Cloud Native and other standards are also applicable.
Bear in mind though, that even then a separation of concerns between processing and visualisation is a sound architectural principle.

- These interoperability questions do not only involve technical standards, but also require semantic harmonization. To be able to 'add' different metrics together, they need to be comparable and aligned. One way to address this is to standardize on common vocabularies.

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

The Agora situation is focussing on the implementation and deployment of LDT's in production. Focussing on wider use, stability, trustworhyness etc.

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

### How do I make sure the maturity of my LDT is aligned with the maturity of my organisation?

For an organisation to be able to benefit from the results from a mature LDT solution the organisation needs to be mature in digital change management as well. To be able to keep track of all the different components of a complex LDT system a configuration management system needs to be in place.

