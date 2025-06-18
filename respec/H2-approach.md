# Approach

## Scope and approach 

Building from previous work there is already a significant body of knowledge being brought into this framework. The Lab-Studio-Arena-Agora (LSAA) model, which is explained in more detail in the next chapter, provides a practical and valuable framework to evaluate the current insights and reframe them in such a way that those insights fit into the chosen model for this framework. 

The main premise adopting the Lab-Studio-Arena-Agora model is that we start from 'first principals', the fundamental questions that we want to answer with an LDT. From there, we work through the Studio and Arena situations to a concrete implementable solution to bring to production in the Agora situation. 

This also brings the notion that some parts of an LDT 'ecosystem' could be in the Agora situation, while other parts are still in the Lab situation. 

Section 2.4 elaborates further on the way the LSAA model for the technical framework has been implemented. 

## Timeline of activities 

The below timeline is limited to describing the work being done on the Technical Framework.  

- March 2024: initial scoping and first talks on Technical Framework during first consortium meeting in Utrecht 
- June 2024: Presentation on approach during second consortium meeting in Amsterdam 
- November 2024: Organizing extra technical assistance 
- December 2024 Discussing use-cases and in-depth interviews with Amsterdam and Utrecht  
- Feb/Mar 2025: evolve main content of the report. 
- Apr/May 2025: review phase. 
- June 2025: finalizing report. 

 ## Presentation of findings: 10 questions per DT situation

To facilitate uptake by WP2 (Pilot Actions) and WP3 (Training modules), and support joint learning, the four Framework deliverables share a __similar structure (Table of Content).__

To ensure that the T4R project partners can quickly find the information they need, the Framework’s findings are presented in Chapter 3 per __Digital Twin situation (Lab, Studio, Arena, or Agora)__ in max __10 critical questions per situation.__

__‘Situation’__ is defined as a set of circumstances in which one finds oneself with the DT initiative, the state of affairs, the location, and the surroundings of that place. In each situation, the most critical questions are listed.  

The Digital Twin situations were defined by K8 and HKU, as a base for the training modules to be developed in WP3, and are described in detail in D1.6.1 T4R Joint Train-the-trainers Framework. For better understanding of the presentation of the Frameworks’ findings in Chapter 3, below they are described in very short.  

### DT Lab
is the situation of DT __experimentation and exploration__ (not only by tech people, also – if not especially - in terms of governance, ethics-inclusion-democratization, and education-training). It’s the place where the __vision__ of the LDT is discussed and becomes alive. First within a small internal group. 

### DT Studio 
is the situation where experimenters and explorers work with other experimenters and explorers of other Labs, __accumulating lessons learned, discuss standards, adopt best practices etc. from other DT Labs.__ It’s the project management phase. The initiators of the LDT gather all feedback they can get from other cities, suppliers etc. With this information and vision for their LDT, the initiators try to onboard as many relevant departments as possible in the LDT project and discuss together how they see the whole LDT. 

### DT Arena
is the situation of __implementation and field testing by professionals within the organization hosting the DT__ (policy makers, urban planners, legal experts, ethics experts etc) , to solve real world challenges through decision-making in territorial planning. It’s the piloting phase where you gather already some feedback from  stakeholders (citizens, external experts, etc.) on prototypes/Minimum Viable Products before launching the intended version of your LDT. 

*Note that the move towards the Arena situation is a critical step: if the Arena stakeholders were not involved in the Lab or Studio situation, implementation might be hampered or stall, as these stakeholders might find crucial elements missing in the emerging DT to be able to blend it in their primary process, for all kind of reasons: functionality, applicability, safety, legal concerns, ethical concerns, etc.*

### DT Agora
is the situation of __implementation and upscaling with stakeholders from outside the organization hosting the DT.__ Whereas the Arena is the situation where a DT is used for internal purposes (in support of territorial planning decision making among professionals), the Agora is the situation where public institutions, NGO’s, companies and individuals (citizens) are getting involved in the decision making. 

*Note that the move towards the Agora situation is again a critical step: if the Agora stakeholders were not involved in Lab, Studio, and Arena situations, implementation might again be hampered or stall, as these stakeholders have different requirements, demands and abilities than the professionals in the Arena. These stakeholders might find crucial elements missing in the emerging DT to be able to participate from their own perspective.*

***

The four situations are __sequential steps__ in DT development process, however to make the DT serve the __purpose__ for which it is (or might be) intended, it is essential to __take into account the stakeholders that belong to that intended purpose already in the earlier situations.__ For example, if the ambition is to involve Agora stakeholders (e.g. citizens) at some point, Agora stakeholders’ stakes need to be taken into account from the Lab situation onwards. However, if the DT is only meant to support collaboration among city hall professionals, it would suffice to take into account Arena stakeholders’ stakes from Lab onwards. In short: each situation has its own stakeholders, but waiting to involve stakeholders from the next situation until you enter that situation tends to be a recipe for failure! 

Anyone embarking on an innovative mission such as a DT initiative for decision support in territorial planning, will be faced with a multitude of questions. Those who have explored further ahead already, have discovered which of those questions proved to be quintessential, and which questions proved to be trivial. This power of hindsight we exploit in each Framework. Since we don’t have the time nor resources to be ‘complete’ or ‘comprehensive’, we focus on __10 ‘critical questions’ per Framework per DT situation.__ In doing so we aim to support all cities in avoiding the most important pitfalls, and build on the most important lessons learned. __In each DT situation, there are critical questions in all Framework domains.__ However, some Frameworks may have a concentration of questions in one DT situation. For example, ethical questions may be critical mostly in Lab and/or Studio, while training questions may be critical mostly in other situations. 

Each critical question is then answered to help those having to make decisions on the DT development. __Answers may contain best practices and negative lessons learnt by project partners and/or organizations outside the T4R consortium, suggestions/tips, resources, links, some context – where applicable, and available.__ Even when questions are not directly relevant for an organization hosting a DT, they can still be valuable as they help to understand possible DT situations. 

Based on the above considerations, the below general template was developed for all four Frameworks to present their findings in Chapter 3. The template was agreed in T4R Project Management Team of 27 January 2025. 

## Architectural viewpoints and the LSAA model

There are many ways to structure content in such a way that readers can navigate through a document and can build a mental picture of the ideas being presented in the document.  

For the T4R project a joint structure, following the LSAA model has been chosen for the frameworks. Many technical designs are based on [TOGAF](https://www.opengroup.org/togaf) and [ArchiMate](https://www.opengroup.org/archimate-forum/archimate-overview) as broadly adopted frameworks. 

For this Technical Design Framework a decision has been made to adapt the ArchiMate architecture framework to the LSAA model. ArchiMate consists of different layers to describe an architecture. In the context of this framework the following mapping has been made. 

### Lab -> ArchiMate Motivational Layer.  

The ArchiMate motivational layer consists of elements like Principles, goals and drivers. These elements capture the fundamental motivations and ideation situation. Principles in ArchiMate (often implicitly or explicitly defined) can represent these core motivations and values. 

### Studio -> ArchiMate Strategy Layer. 

The ArchiMate strategy layer consists of elements like Capabilities and Value Streams. These elements align with the prototyping nature of the studio situation, where demonstration of value creation is important. Capabilities in ArchiMate represent the abilities of an organization to achieve its objectives. The Studio, where concepts are developed and refined, directly contributes to building and leveraging these capabilities to deliver co-created solutions. 

### Arena -> ArchiMate Business / Application Layer 

The Arena, where solutions are presented, evaluated, and selected, can be seen as directly impacting the Business layer. This is where business processes are potentially changed, new services are defined, and business actors interact with the proposed solutions. The Arena is also where the tangible outputs of the Studio are showcased and assessed for their business value and technical feasibility. 

### Agora -> ArchiMate Technology / Implementation Layer 

 The Agora's emphasis on broad adoption and co-evolution aligns with the practical considerations of technical infrastructure and implementation strategies. 

While this scopes the structure and content in a clear and well-defined way, it also means that some topics might not be addressed where they might be expected if you only take the LSAA model into account. Mapping the LSAA situations in this way aligns the LSAA model with the TOGAF [ADM](http://www.togaf.com/admref/_welcome.html) (Architecture Development Method) cycle. 