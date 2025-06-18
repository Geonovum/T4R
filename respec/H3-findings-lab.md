## Lab situation

The lab situation starts with the basic, fundamental questions. Why do I want a LDT and to which guardrails and principles should the LDT adhere? This aligns with the motivational layer in ArchiMate. The questions, while they might have connections to for example the ethics framework, all have a technical connotation here. 

Target Audience: pilot action manager & team, including (technical) specialists. 

### How do we make sure that the LDT system we envision is a fit for the organisation? 

Even though we start in a lab situation, we know already that the envisioned solution should fit into the broader context of the organization and the ecosystem the organization is operating in. Before we even start exploring, we should get an overview of the prerequisites and technical requirements from the organization and other relevant stakeholders within the ecosystem including the envisioned end users. 

__Best practices__

A good way to make sure the technical system is fit for purpose is to work from use cases. What is a manageable, concrete challenge the organization is facing and how could an LDT provide a solution for it? 

Important: Clearly define the challenge you are addressing. Digital Twins can be enhanced to include other challenges once your initial objective is achieved. 

Example Use cases: 

- Data Integration & Accessibility: Many cities, such as Amsterdam and Schuttrange, focus on better integration and linking of existing data for informed decision-making. 
- Environmental & Sustainability Challenges: Cities like Brussels and Dublin are addressing specific environmental challenges, such as mitigating the urban heat island effect and improving decision-making around environmental sustainability. 
- Urban Planning & Development: Several cities (e.g., Rennes, Utrecht, and Leiedal) are focused on improving urban planning processes, often with a strong emphasis on collaboration and visualization tools. 
- Technical Standardization & Interoperability: Leiedal focuses on the need for a global ecosystem of systems, addressing challenges related to interoperability, standards, and evolving technologies. 

__Lessons learned__

While in 'brainstorming mode' it is very likely the envisioned solution is ever growing in scope. This seems great in theory; in practice an increasing scope can also grow a project to such a scope that it becomes unmanageable. Keep trying to find the balance between a valuable solution for the organization while keeping it small enough to stay concrete and manageable. Working from concrete use cases is a way to do this. 

### How do we create insights that are interpretable and well balanced?

Make sure ethics and [FAIR](https://www.go-fair.org/fair-principles/) (Findable, Accessible, Interoperable, Re-usable) data practices are adopted within the systems. All too often an ethics framework is implemented like a 'paper exercise'. Understand challenges from an Ethics and FAIR viewpoint and implement them in technical systems can really add value. For example, you could implement a workflow for an Ethics review. 

__Best Practices__

Use a canvas like the [Data Cooperation Canvas](https://www.datacooperationcanvas.eu/canvas/intro) or [DatCan](https://datcan.nl/) as a tool to address ethics and FAIR practices. 

__Lessons learned__

- Documentation on the solution that is designed and clear definitions about the concepts used are key. 
- Design systems in such a way that provenance is available, and results are transparent. Be wary of 'black box' solutions where you do not have a clue how results are calculated. 

### How can we create results in the short term, while staying relevant towards the future?

Local, as well as regional government organizations have to deal with a lot of interconnected challenges. All too often a solution proposed for a particular challenge keeps increasing in scope until the proposed solution is too big to address, leading to 'apathy'. Be aware of this pattern and make sure to manage expectations. Work towards a bigger goal but do try to keep increments small and relevant. 

__Best practices__

- Work with the best that is available today (affordable, reliable, scalable & resilient). Prefer solutions that are already built or partially there, do not wait for a possible solution that might be there next year.  

__Lessons learned__

- Pay attention to agile development practices, deliverables should add value. But also take 'technical debt' into account. Technical debt refers to the future costs of rework or maintenance that arise from prioritizing speed and short cuts over quality in IT-development, with the debt accumulating over time and requiring resources to be paid off. Addressing and minimizing it from the start of a project is crucial for the development team to maintain efficiency and long-term success. Be aware that system components need maintenance as well and reserve development time for a solid foundation. 


### How do we avoid lock-ins?

This is one of the first questions we start with, because we often see a 'technology push' from vendors which leads to a seemingly nice tool from a private company perspective. Most often though, an LDT solution needs to operate in a broader IT environment within the organization. So even in the Lab situation it is already very valuable to separate building blocks like visualization, data services and analytics in individual components. These components might be from the same solution provider initially, but you reserve the flexibility to 'mix and match' later. 

__Best practices__

- Use Open International Standards. 

    Open standards are a way to enable systems to be interoperable and to avoid lock-in. 

- For DT's we recommend W3C, IEEE, KHRONOS and OGC Open Standards as a basis. There is a clear difference between Open Standards, Open Licenses and Open Source. Adhering to Open Standards makes sure systems are interoperable. Open Licenses and Open Source are not technically necessary to enable interoperability but might provide other benefits to the envisioned solution. 


- There is a clear difference between Open Standards, Open Licenses and Open Source. Adhering to Open Standards makes sure systems are interoperable. Open Licenses and Open Source are not technically necessary to enable interoperability, but might provide other benefits to the envisioned solution.

- The dutch government implements a 'comply or explain' policy for certain standards [(Pas toe of Leg Uit lijst)](https://www.forumstandaardisatie.nl/open-standaarden/verplicht). This approach facilitates the adoption of certain standards to improve interoperability and compliance. Besides the 'comply or explain' policy, there is also a ['recommended' list of standards](https://www.forumstandaardisatie.nl/open-standaarden/aanbevolen). 

__Lessons Learned__

- Some studies, like the [Espresso project](https://link.springer.com/chapter/10.1007/978-3-031-81451-8_12#Fn5) report that promoting common meta-data structures in addition to interoperable open interfaces lower entry barriers to adoption.

- The [DigitalTwin Consortium](https://www.digitaltwinconsortium.org/) periodic tables has proven to be very useful (https://www.digitaltwinconsortium.org/initiatives/capabilities-periodic-table/) 

 

### How do we make sure our solution is re-usable?

Within the Lab situation, initial solutions can be built with a 'throw away' mindset. (Something being built specifically for the Lab situation, with no intention to re-use it at a later phase.) However, even an initial proof-of-concept, throw-away-later component, should demonstrate business value in such a way that the lessons learned from an initial solution can be implemented in a more mature fashion down the road. 

__Best practices__

- Driven by and from use-cases.

    A use-case approach is a very valuable method to make sure technical solutions are actually providing value to the organization. 

    Even from a technical framework viewpoint, a socio-technical approach should be expected. When a particular solution is driven from a very technical viewpoint, it is still relevant to describe the value to the organization of such a technical component. For example, implementing 'row level access control' in the data lake might be a very technical building block, it still is important to describe this feature in terms of value to the organization. 

- Focus on Interfaces

    By defining clear interfaces between components, different parts of a solution can more easily be swapped and re-used.

__Lessons learned__

- People in the organization that can bridge the gap between the policy world and the technical world of an LDT are invaluable. Time and time again it is demonstrated that these two worlds speak different languages. It takes time and dedicated effort to bring those worlds together. The same people can stimulate re-use of solutions because they have the skill to abstract details away and see how solutions fit together. Without this skill there is a high likelihood multiple systems are deployed for essentially the same question. 

### How do we make sure our solution is interoperable with other organizations?

There is a tendency to focus on differences that make our organization unique, while there actually is a lot of communality in challenges between organizations. On a technical level this can be mitigated by using open standards and be open to the possibility of re-using components from partners. Adopting API's and Web standards can significantly simplify this. 

__Best practices__

- 'The web is the operating system' By this we mean that web technology is the fundamental approach to design systems, not only for the visualization part, but also all other parts of the system, like storage and processing. 

__Lessons Learned__

- Modern architectures operate on a web-scale and can work in a distributed environment, technologies like WebAssembly and memory optimized architectures make scaling systems a lot more feasible. In that sense an LDT is not different from any other modern IT system and should adhere to the same architecture principles. 

- By adopting a distributed architecture composed of building blocks we ensure interoperability. 

In the following picture four basic 'building blocks' are visualized. The building blocks together comprise an LDT solution. Between the building blocks we define well defined interfaces based on open standards. 

<img src="./respec/media/Architectuur driehoek EngelsGeen achtergrond.png" alt="Visualisation of the building block architecture." width="900">

*This architecture builds on work from [[LDT]] and [[Decide_Better]]. See those publications for additional information.*

Visualisation of the building block architecture.

- Foundation: Catalogues with Interoperable API's and Data sharing under conditions.
- VVisualization: Find and bind (the functionality to find data and easily add it to a viewer for example), export and import scenes. Visualize results for user interaction. 
- Data: Different data formats, storage solutions and services to provide data. 
- (Data) processing: Calculation modules that are interoperable and orchestration of models. 


---
