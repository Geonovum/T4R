# Main findings

## Lab questions

The lab situation starts with the basic, fundamental questions. Why do I want a LDT and to which guardrails and principles should the LDT adhere?


### How do we avoid lock-ins?

This is one of the first questions we start with, because we often see a 'technology push' from vendors. Which leads to a seemingly nice tool from a single perspective. Most ofen though, an LDT solution needs to operate in a broader IT environment within the organisation. So even in the Lab situation it is already very valuable to separate building blocks like visualisation, data services and analytics in individual components. These components might be from the same solution provider initially, but you reserve the flexibility to 'mix and match' later on.

__Best practices__

- Use Open International Standards.

    Open standards are a way to enable systems to be interoperable and to avoid lock-in.

    - For DT's we recommend W3C and OGC standards as a basis. 

- There is a clear difference between Open Standards, Open Licenses and Open Source. Adhering to Open Standards makes sure systems are interoperable. Open Licenses and Open Source are not technically necessary to enable interoperability, but might provide other benefits to the envisioned solution.

- The dutch government implements a 'comply or explain' policy for certain standards (Pas toe of Leg Uit). This approach facilitates the adoption of certain standards to improve interoperability and compliance. Besides the 'comply or explain' policy, there is also a 'recommended' list of standards.

### How do we make sure our solution is re-usable?

Within the Lab situation, initial solutions can be built with a 'throw away' mindset. However, even an initial proof-of-concecpt, throw-away-later component, should demonstrate bussiness value in such a way that the lessons learned from an initial solution can de implemented in a more mature fashion down the road.

__Best practices__

- Driven by and from use-cases.

    We find a use-case approach a very valuable method to make sure technical solutions are actually driven by business value.

    Even from a technical framework viewpoint, a socio-technical approach should be expected. Even when a particular solution is driven from a very technical viewpoint, it is still relevant to describe the business value of such a technical component. For example, implementing 'row level access control' in the datalake might be a very technical building block, it still is important to describe this feature in terms of business value.

- Interface / implementatie

__Lessons learned__

- Having 'amabassadors' or 'champions' in your organisation that promote solutions and can enthousiastically demonstrate the use and adoption of LDT's is a huge benefit and success factor.


### How do we make sure our solution is interoperable with other organisations?

We find there is a tendency to focus on differences that make our organisation unique, while there actually is a lot of communality in challenges between organisations. On a technical level this can be mitigated by using open standards and be open to the possibility of re-using components from partners. Adopting API's and Web standards can significantly simplify this.

__Best practices__

- 'The web is the operating system' 
By this we mean that web technology is the fundamental approach to design systems, not only for the visualisation part, but also all other parts of the system, like storage and processing.

__Lessons Learned__
    Modern architectures operate on a web-scale and can work in a distributed environment, technologies like WebAssembly and memory optimized architectures make scaling systems a lot more feasible. 


### How do we create insights that are interpretable and well balanced?

Make sure ethics and fair data practices are adopted within the systems. All to often an ethics framework is implemented like a 'paper excercise'. Understanding challenges from an Ethics and FAIR viewpoint and searching for implementations of those concerns in technical systems can really add value. For example you could implement a workflow for an Ethics review. Or support a planning meeting with a digital twin to ensure everyone is operating on a level playing field.

__Best practices__

- documentation and clear definitions are key. Design systems in such a way that provenance is available and results are transparant. Be wary of 'black box' solutions where you do not have a clue how results are calculated.

### How can we create results in the short term, while staying relevant towards the future?

Local, as well as regional government organisations have to deal with a lot of interconnected challenges. All too often a solution proposed for a particular challenge keeps increasing in scope until the proposed solution is too big to address, leading to 'apathy'. Be aware of this pattern and make sure to manage expectations. Work towards a bigger goal but do try to keep increments small and relevant.

__Best practices__

- Work with the best that is available today (affordable, reliable, scalable & resilient).
    A business scope of a project is not the only scope to manage, from a technical point of view it is also tempting to wait for the next new feature or implement promising, but not proven technology too early. Be aware of this challenge and manage this risk explicitly.

__Lessons learned__

- Pay attention to agile development practices, deliverables should add value. But also take 'technical debt' into account. Be aware that system components need maintenance as well and reserve development time for a solid foundation.

---

## Studio questions

The studio situation focusses on the capabilities of a Digital Twin. Which building blocks do we need to define.

<img src="./respec/media/capabilities.png" alt="Main capabilities mapped to the Digital Twin Capabilities Periodic Table" width="900">

Main capabilities mapped to the Digital Twin Capabilities Periodic Table

<aside class="note">
By Capability in this context we mean the ability to achieve a desired outcome in terms of functionalities of a Digital Twin.

We use this approach to help focus on the requirements, rather than technical solutions that might be provided by solution providers. 
</aside>
These capabilities are based on prior work Geonovum has done: [[NLDT_PP_BB]] In this report we try to bridge the gap between technical solutions as described in the [Digital Twin Capabilities Periodic Table](https://www.digitaltwinconsortium.org/initiatives/capabilities-periodic-table/) and the context from which policy makers are operating, often a plan-do-check-act cycle of spatial planning.

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

### Link naar excel, technische kolom in relatie tot Guardrails

todo

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

