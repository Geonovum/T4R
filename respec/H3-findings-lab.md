## Lab questions

The lab situation starts with the basic, fundamental questions. Why do I want a LDT and to which guardrails and principles should the LDT adhere?

### How do we make sure that the LDT system we envision is a fit for the organisation?

Even though we start in a lab situation, we know already that the envisioned solution should fit into the broader context of the organisation and the ecosystem the organisation is operating in. So before we even start exploring we should get an overview of the prerequisites and requirements from the organisation.

__Best practices__

A good way to make sure the technical system is fit for purpose is to work from use cases. What is a manageable, concrete challenge the organisation is facing and how could a LDT provide a solution for it?

__Lessons learned__

While in 'brainstorming mode' it is very likely the envisioned solution is ever growing in scope. This seems great in theory, in practice an increasing scope can also grow a project to such a scope that it becomes unmanageable. Keep trying to find the balance between a valuable solution for the organisation while keeping it small enough to stay concrete and manageable.

### How do we create insights that are interpretable and well balanced?

Make sure ethics and fair data practices are adopted within the systems. All too often an ethics framework is implemented like a 'paper excercise'. Understand challenges from an Ethics and FAIR viewpoint and implement them in technical systems can really add value. For example you could implement a workflow for an Ethics review.

__Best practices__

- Documentation and clear definitions are key. Design systems in such a way that provenance is available and results are transparant. Be wary of 'black box' solutions where you do not have a clue how results are calculated.

### How can we create results in the short term, while staying relevant towards the future?

Local, as well as regional government organisations have to deal with a lot of interconnected challenges. All too often a solution proposed for a particular challenge keeps increasing in scope until the proposed solution is too big to address, leading to 'apathy'. Be aware of this pattern and make sure to manage expectations. Work towards a bigger goal but do try to keep increments small and relevant.

__Best practices__

- Work with the best that is available today (affordable, reliable, scalable & resilient).
    A business scope of a project is not the only scope to manage, from a technical point of view it is also tempting to wait for the next new feature or implement promising, but not proven technology too early. Be aware of this challenge and manage this risk explicitly.

__Lessons learned__

- Pay attention to agile development practices, deliverables should add value. But also take 'technical debt' into account. Be aware that system components need maintenance as well and reserve development time for a solid foundation.


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

- Focus on Interfaces

    By defining clear interfaces between components, different parts of a solution can more easily be swapped and re-used.

__Lessons learned__

- Having 'amabassadors' or 'champions' in your organisation that promote solutions and can enthousiastically demonstrate the use and adoption of LDT's is a huge benefit and success factor.


### How do we make sure our solution is interoperable with other organisations?

We find there is a tendency to focus on differences that make our organisation unique, while there actually is a lot of communality in challenges between organisations. On a technical level this can be mitigated by using open standards and be open to the possibility of re-using components from partners. Adopting API's and Web standards can significantly simplify this.

__Best practices__

- 'The web is the operating system' 
By this we mean that web technology is the fundamental approach to design systems, not only for the visualisation part, but also all other parts of the system, like storage and processing.

__Lessons Learned__

- Modern architectures operate on a web-scale and can work in a distributed environment, technologies like WebAssembly and memory optimized architectures make scaling systems a lot more feasible. 



---
