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
