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

LDT's typically use a lot of datasources. It really helps to think critically about the separation of data and visualisation. What insights do you need to create from your data and which type of datasources are best suited for those insights? Timeseries, satellite imagery or sensordata all have their own datastructures and optimal datamanagement practices. There are different open standards specifically suited for the various types of datasources.

__Best practices__

- Have a Datacentric mind, rather than an application centric mind. 
- Have [FAIR](https://www.go-fair.org/fair-principles/) (Findable, Accesible, Interoperable, Re-usable) principles in mind.

### Which capabilities do we need to combine, validate and verify our data sources?

Some Digital Twins are able to process (measurement) data in real time, monitor (to see whether policy also has the desired effect in the policy cycle), and optionally respond to changes. Measurements are kept so that they can be used to make statements about a series from the past or, if possible, trends in indicators can be seen.

The reproducibility of the circumstances in which a policy decision is made, through a Digital Twin, is very important:

1. In a rule of law, decisions are taken on the basis of a legal framework and linked indicators and 
2. The Digital Twin is really seen as a policy tool that can be trusted and helps in efficiency

__Best practices__

- Well defined, clearly scoped interfaces that take reproducability into account help with the interoperability between components.

    So for example if timetravel is a requirement, this needs to be designed into the datastructure, the controls in the visualisation as well as in the interface between data and visualisation.


### Which capabilities do we need to gain insights from our data sources?

Computation components are an essential part of a Digital Twin. It defines the difference between 'just' a visualisation of a dataset and the ability to interact with the data and perform scenario analysis. This interactive capability is what provides insights.
It is also one of the more complex parts of a digital twin, and not just from a technical standpoint. The translation from indicators based in policy making into actionable indicators in a digital twin is a complex topic. This is the part where IT people and policy makers need to understand eachother, which is the main topic of the 'Policy processes and building blocks for Digital Twins' [[NLDT_PP_BB]] report.

__Best practices__

- Thinking in terms of capabilities or functions enables you to compare different building blocks or solutions from vendors. In that way it facilitates working towards value creation, rather than solution adoption.

### Which capabilities do we need to make sure we can trust the insights we get from our data sources?

A Digital Twin stands (or falls) with the accurate representation (according to agreements and rules) of reality. All data and information that feed the Digital Twins have been tested against agreed quality requirements. Errors cannot be avoided, and user expectations are set accordingly. Trust is also gained through formal agreements and frameworks. For example, the user must make himself known in the system (Identity & Access Management), confidential data is exchanged (data spaces), is logged in and APIs are managed (via gateway functionality).

__Best practices__

- Reach out to policy makers, make sure the results from a DT a relateable to the policies they are supposed to make understandable.

### How do we communicate our insights to our stakeholders?

A great strength of a Digital Twin is the experience aspect. These experiences go beyond simply observing data and models; They enable people to virtually experiment, learn and understand how something looks or functions. This is achieved by users interacting with a virtual copy. The interaction can take place in different ways. User-friendliness and intuitive interface that makes it easy for users to navigate and perform the necessary actions are also important.

__Best practices__

- Understand your stakeholder needs. The experience needs to be useful for the target audience.

### How do we manage the complexity of a solution and make sure we can 'mix and match' different building blocks?

By splitting the system in different building blocks (which are based on standards and interoperable interfaces) we make sure the system is flexible. We can use different visualisation solutions with a processing backend, and we can upgrade certain parts without needing to upgrade the complete system.

__Best practices__

Adopting an architecture that distinguishes similar boundaries between components enables interoperability and understanding between different organisations, because each organisation works from a similar blueprint.

__Lessons Learned__

- Critical succesfactors comprise of concrete, understandable building blocks. By adopting an agile mindset a roadmap can be realized in smaller steps which deliver value in their own rights.

- An area that needs further research revolves around quantifiable key performance indicators that are comparable accross different organisations. 

What we mean by this is the way a policy guideline is 'digitized' in a way that you can run a standardized analysis for the question. An example is the implementation of the '3-30-300 rule', this is a rule about the amount of green in the city. 3-30-300 stands for: every citizen should be able to see 3 trees, 30% of the area should be shaded and there should be a (small) park within 300 meters. Which datasets do we use for this analysis. How do we calculate the sightlines, how do we calculate the shadow percentages.

---
