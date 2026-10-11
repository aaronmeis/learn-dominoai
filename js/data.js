const SOURCES = [
  {n:1,g:"Official docs",t:"User-guide overview (docs 6.2)",u:"https://docs.dominodatalab.com/en/6.2/user_guide/71a047/overview/",type:"docs",trust:"high",b:"1"},
  {n:2,g:"Official docs",t:"Domino architecture (control plane vs data plane)",u:"https://docs.dominodatalab.com/en/6.2/admin_guide/a0b173/architecture/",type:"docs",trust:"high",b:"1,2"},
  {n:3,g:"Official docs",t:"Nexus hybrid architecture",u:"https://docs.dominodatalab.com/en/6.2/admin_guide/c65074/nexus-hybrid-architecture/",type:"docs",trust:"high",b:"2,5"},
  {n:4,g:"Official docs",t:"Manage models with model registry",u:"https://docs.dominodatalab.com/en/5.8/user_guide/3b6ae5/manage-models-with-model-registry/",type:"docs",trust:"high",b:"1,3"},
  {n:5,g:"Official docs",t:"Manage Compute Environments",u:"https://docs.dominodatalab.com/en/cloud/user_guide/f51038/manage-compute-environments/",type:"docs",trust:"high",b:"1,3"},
  {n:6,g:"Official docs",t:"Develop and train models",u:"https://docs.dominodatalab.com/en/6.2/user_guide/786d3c/develop-and-train-models/",type:"docs",trust:"high",b:"1,3"},
  {n:7,g:"Official docs",t:"Deploy to production / model governance",u:"https://docs.dominodatalab.com/en/5.8/user_guide/67333d/deploy-to-production/",type:"docs",trust:"high",b:"5,7"},
  {n:8,g:"Official docs",t:"Publish Apps",u:"https://docs.dominodatalab.com/en/6.2/user_guide/71635d/publish-apps/",type:"docs",trust:"high",b:"1,7"},
  {n:9,g:"Official docs",t:"Deployment offerings",u:"https://docs.dominodatalab.com/en/6.2/user_guide/cece0f/deployment-offerings/",type:"docs",trust:"high",b:"5,7"},
  {n:10,g:"Marketing",t:"Enterprise AI platform (marketing)",u:"https://domino.ai/platform",type:"vendor",trust:"medium",b:"5,7"},
  {n:11,g:"Marketing",t:"Domino Nexus (product page)",u:"https://domino.ai/nexus",type:"vendor",trust:"medium",b:"2,5"},
  {n:12,g:"Talks",t:"Nick Elprin, RevX 2024 keynote",u:"https://www.youtube.com/watch?v=Cr0K48Iw7n4",type:"video",trust:"high",b:"2,4"},
  {n:13,g:"Talks",t:"Jarrod Vawdrey, RevX 2025 MLOps",u:"https://www.youtube.com/watch?v=nWYtj1Rj6GQ",type:"video",trust:"high",b:"2,4"},
  {n:14,g:"Nearby work",t:"Developments in MLflow (DEEM@SIGMOD 2020)",u:"https://doi.org/10.1145/3399579.3399867",type:"paper",trust:"high",b:"2"},
  {n:15,g:"Nearby work",t:"Reproducibility of Machine Learning (Albertoni et al. 2023)",u:"https://doi.org/10.48550/arXiv.2302.12691",type:"paper",trust:"medium",b:"5"},
  {n:16,g:"Official docs",t:"Security at Domino (Trust Center pointer)",u:"https://docs.domino.ai/cloud/admin/security-and-compliance/index",type:"docs",trust:"high",b:"9"},
  {n:17,g:"Marketing",t:"Domino for government / public sector",u:"https://domino.ai/solutions/public-sector",type:"vendor",trust:"medium",b:"9"},
  {n:18,g:"Marketing",t:"Domino home page (stat block)",u:"https://domino.ai/",type:"vendor",trust:"medium",b:"10"},
  {n:19,g:"Marketing",t:"Forrester TEI of Domino (press release, 2021)",u:"https://www.businesswire.com/news/home/20210318005267/en/Domino-Data-Lab-Platform-Can-Generate-a-542-Percent-Return-on-Investment-According-to-Global-Market-Research-Firm",type:"vendor",trust:"medium",b:"10"},
  {n:20,g:"Official docs",t:"Data Planes (concept page)",u:"https://docs.domino.ai/cloud/platform-capabilities/core-concepts/data-plane",type:"docs",trust:"high",b:"8"},
  {n:21,g:"Official docs",t:"Nexus hybrid architecture (6.3)",u:"https://docs.domino.ai/6.3/admin/architecture-and-deployment/architecture/nexus-hybrid-architecture",type:"docs",trust:"high",b:"8"},
  {n:22,g:"Official docs",t:"Domino 5.9.0 release notes",u:"https://docs.dominodatalab.com/release_notes/5-9-0/",type:"docs",trust:"high",b:"8"},
  {n:23,g:"Official docs",t:"Domino 6.0.0 release notes",u:"https://docs.dominodatalab.com/release_notes/6-0-0/",type:"docs",trust:"high",b:"8"},
  {n:24,g:"Official docs",t:"Track and monitor experiments (6.3)",u:"https://docs.domino.ai/6.3/platform-capabilities/features/development/track-monitor",type:"docs",trust:"high",b:"6"},
  {n:25,g:"Official docs",t:"Domino Reproducibility Engine",u:"https://docs.domino.ai/cloud/platform-capabilities/core-concepts/reproducibility",type:"docs",trust:"high",b:"6"},
  {n:26,g:"Official docs",t:"Deploy models (6.3)",u:"https://docs.domino.ai/6.3/platform-capabilities/features/models",type:"docs",trust:"high",b:"7"},
  {n:27,g:"Official docs",t:"Export models to SageMaker (archive)",u:"https://archive.docs.dominodatalab.com/en/latest/user_guide/02ec6d/export-models-to-sagemaker/",type:"docs",trust:"high",b:"7"},
  {n:28,g:"Official docs",t:"Integrate with CI/CD (Model Export API)",u:"https://docs.domino.ai/6.3/platform-capabilities/features/models/integrate-ci-cd-workflows",type:"docs",trust:"high",b:"7"},
  {n:29,g:"Official docs",t:"Export models to NVIDIA Fleet Command",u:"https://docs.dominodatalab.com/en/5.1/user_guide/5cef47/export-models-to-nvidia-fleet-command/",type:"docs",trust:"high",b:"7"},
  {n:30,g:"Official docs",t:"Manage Workspaces (6.3)",u:"https://docs.domino.ai/6.3/platform-capabilities/core-concepts/workspaces/manage-workspaces",type:"docs",trust:"high",b:"10"},
  {n:31,g:"Official docs",t:"Configure long-running Workspaces (5.11)",u:"https://docs.dominodatalab.com/en/5.11/user_guide/815d95/configure-long-running-workspaces/",type:"docs",trust:"high",b:"10"},
  {n:32,g:"Official docs",t:"Autoscaling Apps",u:"https://docs.domino.ai/cloud/platform-capabilities/features/apps/app-logs-and-versioning/autoscaling-apps",type:"docs",trust:"high",b:"7"},
  {n:33,g:"Official docs",t:"App security and identity (6.3)",u:"https://docs.domino.ai/6.3/platform-capabilities/features/apps/authentication-and-identity/app-security",type:"docs",trust:"high",b:"7"},
  {n:34,g:"Official docs",t:"Domino endpoint security (6.3)",u:"https://docs.domino.ai/6.3/platform-capabilities/features/model-deployment/security",type:"docs",trust:"high",b:"7"},
  {n:35,g:"Official docs",t:"Deploy models at REST (4.3)",u:"https://docs.dominodatalab.com/en/4.3/user_guide/8dbc91/deploy-models-at-rest/",type:"docs",trust:"medium",b:"7"},
  {n:36,g:"Competitors",t:"Databricks: Unity Catalog architecture",u:"https://docs.databricks.com/gcp/en/lakehouse-architecture/deployment-guide/unity-catalog",type:"docs",trust:"high",b:"8"},
  {n:37,g:"Competitors",t:"Red Hat OpenShift AI: installing and deploying (3.4)",u:"https://docs.redhat.com/en/documentation/red_hat_openshift_ai_self-managed/3.4/html/installing_and_uninstalling_openshift_ai_self-managed/installing-and-deploying-openshift-ai_install",type:"docs",trust:"high",b:"8"},
  {n:38,g:"Gov",t:"FedRAMP Marketplace, product search Domino",u:"https://www.fedramp.gov/marketplace/products/?q=Domino&view=cards",type:"gov",trust:"high",b:"9"},
  {n:39,g:"Gov",t:"Iron Bank overview",u:"https://docs-ironbank.dso.mil/overview/",type:"gov",trust:"high",b:"9"},
  {n:40,g:"Official docs",t:"Domino backup and restore overview",u:"https://docs.dominodatalab.com/en/latest/admin_guide/08fbb4/backup-and-restore-overview/",type:"docs",trust:"high",b:"6"},
  {n:41,g:"Official docs",t:"Domino architecture overview (6.3)",u:"https://docs.domino.ai/6.3/admin/architecture-and-deployment/architecture/index",type:"docs",trust:"high",b:"8"},
  {n:42,g:"Competitors",t:"SageMaker AI Components for Kubeflow Pipelines",u:"https://docs.aws.amazon.com/en_us/sagemaker/latest/dg/kubernetes-sagemaker-components-for-kubeflow-pipelines.html",type:"docs",trust:"high",b:"8"}
];

const DATA = {
  weeks:[
    {n:1,title:"Placement",time:"25 min",rungs:"100",lib:"mission",
     opener:"Domino Data Lab is an enterprise AI platform. The unit of work is a Project. The IDE is a client of that Project, not the product [S1][S4].",
     obj:"Say what Domino is, and name the tool you would not pick.",
     deliv:"Two sentences: what it is, and one job it should refuse.",
     mods:[
       {t:"Unit of work [S1]",rl:"scope · 100", action:"Write what a Project contains.", whyMatters:"A design that treats Domino as hosted Jupyter starts in the wrong place."},
       {t:"Competitor map",rl:"scope · 100", action:"Name one job Databricks, SageMaker, OpenShift AI, Kubeflow, and Dataiku each win.", whyMatters:"The day's falsifier is a feature tour with no refusal."}
     ],
     vids:[{s:1},{s:10}]},
    {n:2,title:"ML primitives",time:"20 min",rungs:"100",lib:"block-01-core-concepts",
     opener:"A model is trained, then used for inference. An experiment records an attempt. A registry catalogs models. Serving makes them callable.",
     obj:"Define model, train vs infer, experiment, registry, serving, MLOps, governance without Domino words.",
     deliv:"Seven one-line definitions.",
     mods:[
       {t:"Train versus infer",rl:"scope · 100", action:"Name which is usually a Job and which is an endpoint or App.", whyMatters:"Mixing them up breaks the lifecycle sketch."},
       {t:"MLOps versus governance",rl:"scope · 100", action:"One sentence each.", whyMatters:"MLOps is the lifecycle. Governance is review, lineage, and access."}
     ],
     vids:[{s:4},{s:14}]},
    {n:3,title:"Project, Workspace, Environment",time:"25 min",rungs:"100",lib:"block-01-core-concepts",
     opener:"A Workspace is Jupyter, VS Code, RStudio, or similar on a hardware tier [S6]. An Environment is the Docker image that session boots [S5].",
     obj:"Separate Project, Workspace, Environment, and hardware tier.",
     deliv:"Four sentences, one term each.",
     mods:[
       {t:"Workspace [S6]",rl:"lifecycle · 100", action:"List three IDEs Domino hosts.", whyMatters:"Hosting an IDE is not the system of record."},
       {t:"Environment revision [S5]",rl:"lifecycle · 200", action:"Say what happens when you edit an Environment.", whyMatters:"A missing revision cannot reconstruct the run."}
     ],
     vids:[{s:5},{s:6}]},
    {n:4,title:"Control plane vs data plane",time:"25 min",rungs:"200",lib:"deep-dive",
     opener:"Control plane: UI, API, metadata, registry, image builder. Data plane: Workspaces, Jobs, Apps, endpoints as ephemeral pods [S2].",
     obj:"Put GPU compute and the model card on the correct plane.",
     deliv:"A two-box sketch.",
     mods:[
       {t:"Control plane [S2]",rl:"hybrid · 200", action:"Name four control-plane services.", whyMatters:"Where the card lives is not where the GPU lives."},
       {t:"Data plane [S2]",rl:"hybrid · 200", action:"Name the workloads that run as pods.", whyMatters:"Nexus adds more of this plane, not a second UI."}
     ],
     vids:[{s:2},{s:3}]},
    {n:5,title:"Jobs, experiments, datasets",time:"20 min",rungs:"200",lib:"block-03-active-practice",
     opener:"A Job is the non-interactive path. Experiments record runs. Datasets are versioned data the Project tracks [S6][S4].",
     obj:"Say when you leave the Workspace for a Job.",
     deliv:"One sentence on automation, one on what gets recorded.",
     mods:[
       {t:"Job [S6]",rl:"lifecycle · 200", action:"Write the handoff from a Workspace session to a Job.", whyMatters:"A notebook left running is not a pipeline."},
       {t:"Dataset gap [S20][S23]",rl:"hybrid · 300", action:"Datasets on remote planes since 6.0; Dataset CLI is local-only. Starburst sources stay local.", whyMatters:"The old Model API / App / Dataset remote-plane gap is history. Check the installed version."}
     ],
     vids:[{s:6},{s:4}]},
    {n:6,title:"Registry and model cards",time:"25 min",rungs:"200",lib:"claims-debates",
     opener:"The registry is MLflow-based. A model card tracks code, Environment, workspace settings, and datasets [S4]. Chen 2020 is nearby work, not a Domino eval [S14].",
     obj:"Name the reconstructable unit.",
     deliv:"The card fields you can list from docs, and one field you would still verify in a tenant.",
     mods:[
       {t:"Model card [S4]",rl:"lifecycle · 200", action:"List lineage fields from the docs.", whyMatters:"Debate 1 Claim A stands or falls on this list (E1A)."},
       {t:"Model Sentry [S7]",rl:"trust · 200", action:"Say what HITL review is for.", whyMatters:"A registry without review is a catalog, not governance."}
     ],
     vids:[{s:4},{s:7}]},
    {n:7,title:"Endpoints and Apps",time:"20 min",rungs:"200",lib:"block-07-application",
     opener:"A Model API packages Flask or Plumber. An App serves Dash, Streamlit, Shiny, or any HTTP on port 8888 [S7][S8]. App Hub is the homepage name [S10].",
     obj:"Pick App versus endpoint for a person with a browser versus another system.",
     deliv:"Two rows: consumer, process, port.",
     mods:[
       {t:"Model API [S7]",rl:"lifecycle · 200", action:"Name the two packaging languages.", whyMatters:"Exporting to SageMaker is a third path, not a Domino App."},
       {t:"Publish Apps [S8]",rl:"lifecycle · 200", action:"State the port and Launchpad.", whyMatters:"The contract is the user guide, not the App Hub headline."}
     ],
     vids:[{s:8},{s:7}]},
    {n:8,title:"Nexus and deployment",time:"20 min",rungs:"300",lib:"deep-dive",
     opener:"Nexus is one control plane plus many data planes. It is optional. Remote planes historically lacked Model APIs, Apps, and Datasets [S3][S9].",
     obj:"Say when hybrid is the point, and when it is a second control plane.",
     deliv:"One sentence for locality, one for a lakehouse that already owns the job.",
     mods:[
       {t:"Nexus contract [S3]",rl:"hybrid · 300", action:"Write local plane versus remote plane.", whyMatters:"Desk test E5A: re-read the 6.2 page before repeating the gap."},
       {t:"Offerings [S9]",rl:"hybrid · 200", action:"Name SaaS, self-managed VPC, on-prem.", whyMatters:"On-prem is a locality proposal, not an ATO."}
     ],
     vids:[{s:3},{s:11}]},
    {n:9,title:"Compliance logos vs ATO",time:"20 min",rungs:"300",lib:"elicit",
     opener:"Marketing states ISO, SOC 2, HIPAA, GDPR, 21 CFR Part 11 support, and 'deployed in DoD IL5 environments' [S10]. Elicit found no Domino product paper (E3B, 2026-10-11).",
     obj:"Separate a program claim from an authorization.",
     deliv:"The IL5 sentence rewritten as a claim, plus what would make it acceptable.",
     mods:[
       {t:"Not an ATO [S10]",rl:"trust · 300", action:"Write what a PA or ATO would look like.", whyMatters:"A logo does not authorize this lab."},
       {t:"Nearby papers [S14][S15]",rl:"trust · 300", action:"Name MLflow 2020 and Albertoni 2023 as nearby work.", whyMatters:"Analogical transfer is not a product eval."}
     ],
     vids:[{s:10},{s:15}]},
    {n:10,title:"Speed and lock-in",time:"20 min",rungs:"300",lib:"claims-debates",
     opener:"50% / 6× / 40% / 75% are briefing lines [S10]. 'Any tool' means Domino hosts IDEs; Environments and metadata still live in Domino [S1][S5].",
     obj:"Name a mechanism you can teach, and a percentage you will not quote as a contract.",
     deliv:"One mechanism (self-serve tier). One export that does not move the platform.",
     mods:[
       {t:"Briefing numbers [S10]",rl:"trust · 300", action:"Circle 6× and write 'unverified until a study URL'.", whyMatters:"Desk test E4B."},
       {t:"Exit cost [S5][S2]",rl:"trust · 300", action:"List what stays in Mongo/Postgres when you export a model.", whyMatters:"Debate 2."}
     ],
     vids:[{s:10},{s:5}]},
    {n:11,title:"Decision packet",time:"25 min",rungs:"200",lib:"block-07-application",
     opener:"Sketch Project → Workspace / Job → Experiment → Registry → Endpoint or App. Name the plane, the record, and the competitor you refuse.",
     obj:"Walk into a design review with a placement, not a feature list.",
     deliv:"A three-line decision: in, out, and measure.",
     mods:[
       {t:"The sketch",rl:"scope · 200", action:"Annotate compute location and card fields.", whyMatters:"The mission's success test."},
       {t:"The refusal",rl:"scope · 200", action:"Pick one competitor and the warrant.", whyMatters:"Without a refusal the pack is a tour."},
       {t:"The caveat",rl:"trust · 200", action:"IL5 is not an ATO. Percentages are not an SLA.", whyMatters:"The room will ask."}
     ],
     vids:[{s:2},{s:13}]}
  ],
  ladder:[
    {key:"place",name:"Placement",img:"100",r:[{n:100,t:"Say what Domino is and name the unit of work."},{n:200,t:"Place it against Databricks, SageMaker, OpenShift AI, Kubeflow, Dataiku."},{n:300,t:"Defend one choice in a design review."}]},
    {key:"lifecycle",name:"Lifecycle",img:"200",r:[{n:100,t:"Project, Workspace, Environment."},{n:200,t:"Job, experiment, model card, endpoint or App."},{n:300,t:"Reconstruct a run from the card fields you can name."}]},
    {key:"hybrid",name:"Hybrid",img:"300",r:[{n:100,t:"Control plane versus data plane."},{n:200,t:"Nexus as extra data planes."},{n:300,t:"Remote-plane feature gaps on the installed version."}]},
    {key:"trust",name:"Trust",img:"300",r:[{n:100,t:"Lineage on the card."},{n:200,t:"Sentry and monitoring."},{n:300,t:"Logos are not an ATO. Percentages are not an SLA."}]}
  ],
  miniModules:[
    {name:"Databricks",t:"Lakehouse plus Unity Catalog. Wins when that already owns data and registry."},
    {name:"SageMaker",t:"AWS managed train and serve. Wins when endpoints already exist in the account."},
    {name:"OpenShift AI",t:"Red Hat Kubernetes ML. Wins when the estate is already OpenShift."},
    {name:"Kubeflow",t:"Open-source Kubernetes ML stack. Wins when the team will operate CRDs."},
    {name:"Dataiku",t:"Visual governed workbench. Wins when users are analysts, not IDE-first scientists."}
  ],
  prompts:[
    {cat:"1 · Placement",model:"any",desc:"What it is, and what you refuse.",items:["Laptop notebook team","Lakehouse already in Databricks"],
     flagship:"Place Domino against Databricks, SageMaker, OpenShift AI, Kubeflow, and Dataiku. Name the unit of work. Name the one tool you refuse and why. Cite the overview [S1] and architecture [S2]."},
    {cat:"2 · ML primitives",model:"any",desc:"Define the words without Domino.",items:["Train a classifier","Call it from an app"],
     flagship:"Define model, training, inference, experiment, registry, serving, MLOps, and governance in one line each. No Domino product names."},
    {cat:"3 · Project and Workspace",model:"any",desc:"IDE versus image versus Project.",items:["VS Code on a GPU","Edit a package list"],
     flagship:"Separate Project, Workspace, Environment, and hardware tier. Cite [S5] and [S6]. Say what an Environment revision is."},
    {cat:"4 · Planes",model:"any",desc:"Where the GPU lives versus where the card lives.",items:["Model card","GPU Workspace"],
     flagship:"Draw control plane versus data plane. Put RabbitMQ, the registry, a Workspace pod, and a Streamlit App in the right box. Cite [S2]."},
    {cat:"5 · Jobs and data",model:"any",desc:"When the notebook becomes a Job.",items:["Nightly retrain","Dataset on a remote plane"],
     flagship:"When do you leave a Workspace for a Job? What did remote data planes historically lack? Cite [S6] and [S3]."},
    {cat:"6 · Registry",model:"any",desc:"The reconstructable unit.",items:["Rebuild last week's model","MLflow paper"],
     flagship:"List model-card lineage fields from [S4]. State that Chen 2020 is nearby work [S14], not a Domino eval."},
    {cat:"7 · Endpoint vs App",model:"any",desc:"Who consumes it.",items:["Another service","A person with a browser"],
     flagship:"Model API versus App: packaging, port, Launchpad. Cite [S7] and [S8]. Do not treat App Hub as a separate product without a docs split."},
    {cat:"8 · Nexus",model:"any",desc:"One control plane, many data planes.",items:["Data cannot leave a region","Work already on one lakehouse"],
     flagship:"What is Nexus? What is optional [S9]? What must you re-read on the 6.2 Nexus page before repeating a feature gap [S3]?"},
    {cat:"9 · IL5 and logos",model:"any",desc:"A sentence is not an ATO.",items:["Homepage IL5 line","SOC 2 logo"],
     flagship:"Rewrite 'deployed in DoD IL5 environments' as a claim. Say what a PA or ATO would add. Cite E3B: Elicit found no Domino product paper."},
    {cat:"10 · Speed and lock-in",model:"any",desc:"Mechanism versus percentage.",items:["6× on the homepage","Export to SageMaker"],
     flagship:"Which mechanism can you teach without quoting 6×? What stays in Domino when you export a model? Cite [S10] [S5] [S2]."},
    {cat:"11 · Decision",model:"any",desc:"In, out, and measure.",items:["Design review tomorrow","Idle GPU Workspace"],
     flagship:"Write a three-line decision: when Domino is in, which platform you stop using, and one briefing number you will not treat as a contract."},
    {cat:"12 · Warrants",model:"any",desc:"Why the evidence is supposed to count.",items:["Hosted Jupyter","IL5 logo"],
     flagship:"Pick one live debate. Write Claim A, Claim B, the warrant as If X then Y, one hidden assumption, and one test that would support A, one that would support B, and one that would weaken both. Cite ledger numbers."}
  ],
  checklist:[
    {title:"Hosted Jupyter is the product",view:"Placement",src:"S4",
     good:"The reconstructable unit is the model card: code, Environment, hardware, datasets.",
     bad:"Tell: people never open a card. Root cause: the IDE was sold as the platform."},
    {title:"Reproducibility theater",view:"Lifecycle",src:"S5",
     good:"Pin Environment revision and data version.",
     bad:"Tell: files are tracked, the run cannot be rebuilt."},
    {title:"Idle GPU",view:"Hybrid",src:"S6",
     good:"Stop the Workspace. Chargeback is policy.",
     bad:"Tell: a GPU tier left open overnight."},
    {title:"Any-tool equals no lock-in",view:"Trust",src:"S2",
     good:"Export the artifact. Expect to rebuild Environments and metadata elsewhere.",
     bad:"Tell: 'we can always leave' with no exit plan."},
    {title:"IL5 logo",view:"Trust",src:"S10",
     good:"Demand a PA or ATO page for a named offering.",
     bad:"Tell: homepage sentence treated as authorization."},
    {title:"Briefing percentages",view:"Trust",src:"S10",
     good:"Teach self-serve Environments and elastic hardware. Measure your queue.",
     bad:"Tell: 6× or 40% quoted as a contract."},
    {title:"Remote plane equals local plane",view:"Hybrid",src:"S3",
     good:"Read the installed Nexus page before promising Apps or Datasets on a remote plane.",
     bad:"Tell: publish App on a remote plane and the UI forbids it."},
    {title:"App Hub versus Apps",view:"Lifecycle",src:"S8",
     good:"Contract is Publish Apps, port 8888, Launchpad.",
     bad:"Tell: pitch-deck name treated as a separate product."}
  ],
  cheat:[
    {t:"Use Domino",d:"You need a governed lifecycle across IDEs, and compute may sit in more than one cluster."},
    {t:"Use Databricks",d:"The lakehouse and Unity Catalog already own the data and the registry."},
    {t:"Use SageMaker",d:"The account is AWS-native and endpoints already exist."},
    {t:"Do not quote the homepage",d:"IL5 is not an ATO. 50% / 6× / 40% / 75% are not an SLA."}
  ],
  falsifier:"A feature tour that never names the system of record, never splits control plane from data plane, and never names when Databricks, SageMaker, OpenShift AI, Kubeflow, or Dataiku is better.",
  quizSections:{1:"Placement",2:"Engine",3:"Limits",4:"NotebookLM",5:"Warrants"},
  quiz:[
    {section:1,question:"What is Domino's unit of work?",answer:"A Project. Files, Environments, datasets, experiments, models, and Apps live there.",src:"S1"},
    {section:1,question:"What is a Workspace?",answer:"A hosted IDE on a hardware tier. Jupyter, VS Code, RStudio, and others.",src:"S6"},
    {section:2,question:"What is an Environment?",answer:"A Docker-image abstraction. Every Workspace, Job, App, and Model boots a container.",src:"S5"},
    {section:2,question:"Where does the control plane live versus the data plane?",answer:"Control plane: UI, API, metadata, orchestration. Data plane: Workspaces, Jobs, Apps, endpoints as ephemeral pods.",src:"S2"},
    {section:2,question:"What does a model card record?",answer:"Lineage: code, Environment, workspace settings, datasets.",src:"S4"},
    {section:2,question:"What is Domino's model registry based on?",answer:"MLflow. Chen 2020 is the nearby paper, not a Domino eval.",src:"S4"},
    {section:3,question:"What is Nexus?",answer:"One control plane plus many data planes. Optional. Remote planes may lack features the local plane has.",src:"S3"},
    {section:3,question:"Is 'deployed in DoD IL5 environments' an ATO?",answer:"No. It is a marketing sentence. A PA or ATO is a named authorization for a named offering.",src:"S10"},
    {section:3,question:"What are 50% / 6× / 40% / 75%?",answer:"Briefing lines on the platform page. Not an SLA.",src:"S10"},
    {section:1,question:"When is Databricks the better placement?",answer:"When the work already lives on that lakehouse and Unity Catalog is the system of record.",src:"S3"},
    {section:2,question:"What port must a Domino App serve?",answer:"8888.",src:"S8"},
    {section:2,question:"How is a Model API packaged?",answer:"Flask for Python, Plumber for R, from Project files.",src:"S7"},
    {section:3,question:"What did Elicit return for a Domino product paper?",answer:"Nothing. Nearby MLflow and reproducibility papers only. E3B run 2026-10-11.",src:"S14"},
    {section:2,question:"What is Model Sentry?",answer:"Human-in-the-loop review before production.",src:"S7"},
    {section:1,question:"Name three deployment offerings.",answer:"Managed SaaS, self-managed VPC, on-prem. Nexus data planes are optional.",src:"S9"},
    {section:2,question:"What is Launchpad?",answer:"The catalog where users find published Apps.",src:"S8"},
    {section:3,question:"What historically did remote data planes lack?",answer:"Model APIs, Apps, Datasets, Starburst. Check the installed 6.2 page before repeating.",src:"S3"},
    {section:5,question:"Why is a hosted Jupyter not the product?",answer:"If the reconstructable unit is the recorded context, the IDE is a client of that unit.",src:"S4"},
    {section:5,question:"Why is 'any tool' not 'no lock-in'?",answer:"Exporting an artifact is not exporting Environments, hardware tiers, and the metadata stores.",src:"S5"},
    {section:5,question:"What test would weaken both 'Nexus replaces a lakehouse' and 'one cluster is always enough'?",answer:"Attach a second plane and publish an App there; record what the UI forbids.",src:"S3"}
  ],
  glossary:[
    {category:"Placement",term:"Domino Data Lab",rung:100,essential:true,definition:"Enterprise AI / MLOps platform: workspaces, compute, datasets, experiments, registry, endpoints, Apps, governance. Docs are the contract. [S1]",source:"ledger"},
    {category:"Placement",term:"Project",rung:100,essential:true,definition:"The unit of work. Files, Environments, datasets, experiments, models, and Apps live here. [S1]",source:"ledger"},
    {category:"Placement",term:"Model",rung:100,essential:true,definition:"A trained function. Training produces it. Inference uses it.",source:"ledger"},
    {category:"Placement",term:"Training",rung:100,essential:true,definition:"Fitting parameters on data. Usually a Job or a Workspace session.",source:"ledger"},
    {category:"Placement",term:"Inference",rung:100,essential:true,definition:"Running a trained model on new inputs. Serving is inference offered as an endpoint or an App.",source:"ledger"},
    {category:"Placement",term:"MLOps",rung:100,essential:true,definition:"Taking models from a notebook into a governed, repeatable lifecycle. Nearby papers are not a Domino eval. [S14]",source:"ledger"},
    {category:"Placement",term:"Databricks",rung:200,definition:"Lakehouse plus Unity Catalog. Wins when that already owns data and registry.",source:"ledger"},
    {category:"Placement",term:"SageMaker",rung:200,definition:"AWS managed train and serve. Wins when endpoints already exist.",source:"ledger"},
    {category:"Placement",term:"OpenShift AI",rung:200,definition:"Red Hat Kubernetes ML platform. Wins when the estate is already OpenShift.",source:"ledger"},
    {category:"Placement",term:"Kubeflow",rung:200,definition:"Open-source Kubernetes ML stack. Wins when the team will operate CRDs.",source:"ledger"},
    {category:"Placement",term:"Dataiku",rung:200,definition:"Visual governed workbench. Wins when users are analysts.",source:"ledger"},
    {category:"Lifecycle",term:"Workspace",rung:100,essential:true,definition:"Hosted IDE (Jupyter, VS Code, RStudio, SAS, MATLAB, Cursor) on a hardware tier. [S6]",source:"ledger"},
    {category:"Lifecycle",term:"Hardware tier",rung:100,essential:true,definition:"The size and type of machine a Workspace, Job, App, or endpoint requests. Can target a data plane. [S6][S8]",source:"ledger"},
    {category:"Lifecycle",term:"Environment",rung:100,essential:true,definition:"Docker-image abstraction. Every Workspace, Job, App, and Model boots a container. [S5]",source:"ledger"},
    {category:"Lifecycle",term:"Environment revision",rung:200,essential:true,definition:"A rebuild of that image after an edit. The card should name the revision that trained the model. [S4][S5]",source:"ledger"},
    {category:"Lifecycle",term:"Job",rung:100,essential:true,definition:"Non-interactive run of Project code on a hardware tier. [S6]",source:"ledger"},
    {category:"Lifecycle",term:"Experiment",rung:100,essential:true,definition:"A recorded attempt: code, Environment, hardware, data, parameters, metrics.",source:"ledger"},
    {category:"Lifecycle",term:"Dataset",rung:200,definition:"Versioned data Domino tracks for a Project. Remote planes historically lacked Datasets. [S3]",source:"ledger"},
    {category:"Lifecycle",term:"Registry",rung:100,essential:true,definition:"Catalog of models you intend to reuse or ship. Domino's is MLflow-based. [S4]",source:"ledger"},
    {category:"Lifecycle",term:"Model card",rung:100,essential:true,definition:"Lineage record: code, Environment, workspace settings, datasets. [S4]",source:"ledger"},
    {category:"Lifecycle",term:"Model API",rung:200,essential:true,definition:"Project files packaged as Flask (Python) or Plumber (R) and hosted as an endpoint. [S7]",source:"ledger"},
    {category:"Lifecycle",term:"App",rung:200,essential:true,definition:"HTTP app (Dash, Flask, Streamlit, Shiny, or any HTTP) served from a Project on port 8888. [S8]",source:"ledger"},
    {category:"Lifecycle",term:"App Hub",rung:200,definition:"Marketing name for scaling apps to users. The contract is Publish Apps [S8], not the homepage alone [S10].",source:"ledger"},
    {category:"Lifecycle",term:"Launchpad",rung:200,definition:"Where users find published Apps. [S8]",source:"ledger"},
    {category:"Lifecycle",term:"Port 8888",rung:200,definition:"The port a Domino App must serve. [S8]",source:"ledger"},
    {category:"Lifecycle",term:"Model Sentry",rung:200,essential:true,definition:"Human-in-the-loop review before production. [S7]",source:"ledger"},
    {category:"Hybrid",term:"Control plane",rung:200,essential:true,definition:"UI, API, metadata, orchestration: Secrets Vault, RabbitMQ, Identity, Mongo/Postgres, Experiment Manager, Image Builder, Model Registry. [S2]",source:"ledger"},
    {category:"Hybrid",term:"Data plane",rung:200,essential:true,definition:"Where work runs: agent, autoscaler, Workspaces, Apps, endpoints, Jobs as ephemeral pods. [S2]",source:"ledger"},
    {category:"Hybrid",term:"Nexus",rung:200,essential:true,definition:"Hybrid: one control plane, many data planes. Optional. Prefer [S3] over the product page [S11].",source:"ledger"},
    {category:"Hybrid",term:"Local data plane",rung:300,definition:"Data plane in the control-plane cluster. Full feature set historically. [S3]",source:"ledger"},
    {category:"Hybrid",term:"Remote data plane",rung:300,essential:true,definition:"Data plane in another cluster, cloud, region, or on-prem. Check the installed version for Apps and Datasets. [S3]",source:"ledger"},
    {category:"Hybrid",term:"Kubernetes",rung:100,definition:"Cluster that schedules pods from images. Domino is Kubernetes-native (Helm). [S2]",source:"ledger"},
    {category:"Hybrid",term:"Pod",rung:200,definition:"Ephemeral containers. Workspaces, Jobs, Apps, and endpoints run as pods. [S2]",source:"ledger"},
    {category:"Trust",term:"Lineage",rung:200,essential:true,definition:"What produced this artifact. Model cards store it. [S4]",source:"ledger"},
    {category:"Trust",term:"Reproducibility",rung:200,essential:true,definition:"Ability to rebuild the same run from the recorded context. Albertoni 2023 is nearby terminology [S15].",source:"ledger"},
    {category:"Trust",term:"Governance",rung:200,definition:"Review, lineage, access, and change control. Model Sentry is one HITL step. [S7]",source:"ledger"},
    {category:"Trust",term:"IL5",rung:300,essential:true,definition:"DoD Impact Level 5. Marketing says Domino is deployed in DoD IL5 environments [S10]. That sentence is not a DISA PA or an ATO.",source:"ledger"},
    {category:"Trust",term:"ATO",rung:300,essential:true,definition:"Authorization to Operate for this program. A vendor logo does not grant it.",source:"ledger"},
    {category:"Trust",term:"Briefing percentages",rung:300,essential:true,definition:"50% lifecycle, 6× development, 40% infra, 75% onboarding on [S10]. Not an SLA.",source:"ledger"},
    {category:"Trust",term:"System of record",rung:200,essential:true,definition:"Code plus Environment plus hardware plus datasets plus parameters that reconstruct a run. Debate 1. [S4]",source:"ledger"},
    {category:"Trust",term:"Any-tool claim",rung:300,definition:"Domino hosts many IDEs and frameworks. Hosting is not zero lock-in. Debate 2. [S1][S5]",source:"ledger"},
    {category:"Trust",term:"Reproducibility theater",rung:300,essential:true,definition:"Tracking files without pinning Environment revision and data version.",source:"ledger"},
    {category:"Trust",term:"Idle GPU",rung:300,definition:"A Workspace left open on a GPU tier. Someone's budget. [S6]",source:"ledger"}
  ],
  views:{
    conceptual:{rule:"What and why. Governed lifecycle, not a hosted notebook.",lib:"mission",img:[],
      tables:[{caption:"Placement",headers:["","Domino","Databricks","SageMaker","Kubeflow"],rows:[["Shape","Project lifecycle","Lakehouse","AWS managed","K8s CRDs"],["Record","Model card / MLflow","Unity Catalog","SageMaker registry","Your design"],["Hybrid","Nexus data planes","Regions / Delta Sharing","Accounts / VPC","Clusters you run"]]}]},
    logical:{rule:"How a run moves.",lib:"deep-dive",img:[],
      tables:[{caption:"Lifecycle",headers:["Step","What is recorded"],rows:[["Project","Files and membership"],["Workspace / Job","Environment revision, hardware tier"],["Experiment","Parameters and metrics"],["Registry","Model card lineage"],["Endpoint or App","Who can call it"]]}]},
    physical:{rule:"Two planes on Kubernetes.",lib:"ref-arch",img:["domino-reference-architecture.png"],
      tables:[{caption:"Planes",headers:["Plane","Runs"],rows:[["Control","UI, API, metadata, registry, image builder"],["Data","Workspaces, Jobs, Apps, endpoints as pods"]]}]},
    integration:{rule:"IDEs in, artifacts out.",lib:"block-07-application",img:[],
      tables:[{caption:"Surfaces",headers:["Path","Consumer"],rows:[["Workspace","Practitioner"],["Model API","Another system"],["App port 8888","Person with a browser"],["Export","SageMaker / Snowflake / Databricks / Docker"]]}]},
    govcloud:{rule:"A logo is not an authorization.",lib:"elicit",img:[],
      tables:[{caption:"Boundary",headers:["Sentence","Treat as"],rows:[["Deployed in DoD IL5 environments","Claim, not a PA"],["SOC 2 / HIPAA / ISO","Program evidence"],["50% / 6× / 40% / 75%","Briefing, not SLA"],["Self-managed / on-prem","Locality proposal"]]}]}
  },
  eaFrameworks:{
    note:"Domino is a platform you place. These views are altitude rules for that placement.",
    conceptual:[
      {phase:"C1",t:"Workload",items:["Governed model lifecycle across IDEs.","A single lakehouse already covering that job stays there."]},
      {phase:"C2",t:"Unit of work",items:["Project, not the IDE window.","Model card is the reconstructable unit."]},
      {phase:"C3",t:"Neighbors",items:["Databricks, SageMaker, OpenShift AI, Kubeflow, Dataiku.","Each wins a different job."]}
    ],
    logical:[
      {phase:"L1",t:"Lifecycle",items:["Project → Workspace / Job → Experiment → Registry → Endpoint or App.","Environment revision pins the image."]},
      {phase:"L2",t:"Record",items:["MLflow-based registry.","Sentry before production."]},
      {phase:"L3",t:"Consumers",items:["App: person, port 8888.","Model API: another system."]}
    ],
    physical:[
      {phase:"P1",t:"Control plane",items:["UI, API, metadata stores, image builder, registry.","HTTPS clients."]},
      {phase:"P2",t:"Data plane",items:["Ephemeral pods.","Hardware tier can target a plane."]},
      {phase:"P3",t:"Nexus",items:["Optional extra planes.","Remote feature set is version-specific."]}
    ],
    integration:[
      {phase:"I1",t:"Entry",items:["Jupyter, VS Code, RStudio, SAS, MATLAB, Cursor.","Git and object storage outside the cluster."]},
      {phase:"I2",t:"Exit",items:["Export to SageMaker, Snowflake, Databricks, Docker.","Metadata stores stay."]},
      {phase:"I3",t:"Identity",items:["Control-plane identity. Docs mention Keycloak.","Launchpad versus project Deployments."]}
    ],
    trust:[
      {phase:"T1",t:"Lineage",items:["Card fields from docs.","Missing Environment revision is theater."]},
      {phase:"T2",t:"Authorization",items:["IL5 sentence is not a PA.","Elicit found no Domino product paper."]},
      {phase:"T3",t:"Briefing",items:["Percentages are not an SLA.","Measure your queue."]}
    ],
    altitudes:[
      {name:"Conceptual",q:"Which job?",allowed:"Workload and neighbors.",forbidden:"Port numbers, Helm.",lib:"mission"},
      {name:"Logical",q:"How does a run move?",allowed:"Lifecycle and card.",forbidden:"IL5 as ATO.",lib:"block-03-active-practice"},
      {name:"Physical",q:"Which plane?",allowed:"Control versus data, Nexus.",forbidden:"Homepage percentages.",lib:"deep-dive"},
      {name:"Integration",q:"How does it enter and leave?",allowed:"IDEs, export, Apps.",forbidden:"Classified-lab approval.",lib:"block-07-application"},
      {name:"Trust",q:"What is not an authorization?",allowed:"Logos, E3B, briefing numbers.",forbidden:"Slide speed as an SLA.",lib:"elicit"}
    ],
    table:[
      ["Concern","View","Owner","Out"],
      ["Unit of work","Conceptual","Overview [S1]","Treating the IDE as the product"],
      ["Model card","Logical","Registry [S4]","Tracking files without an Environment revision"],
      ["Two planes","Physical","Architecture [S2]","Assuming remote Nexus equals local"],
      ["App port 8888","Integration","Publish Apps [S8]","App Hub as a separate product"],
      ["IL5 sentence","Trust","Platform page [S10], E3B","Calling a logo an ATO"]
    ]
  },
  deckFlags:{
    10:"The homepage IL5 sentence is a claim, not a DISA PA.",
    11:"50% / 6× / 40% / 75% are briefing lines, not an SLA."
  }
};

DATA.cut = {
  labels: ["Title","What it is","ML primitives","Project","Workspace and Environment","Control vs data plane","Jobs and experiments","Registry and cards","Endpoint vs App","Nexus hybrid","When not to use it","Decision packet","NBLM 13","NBLM 14","NBLM 15"],
  slides: [
    "Slide 1 titles the cut. Domino Data Lab: a governed lifecycle, not a hosted notebook. Planes, the system of record, and the competitor that already owns the job.",
    "Slide 2 is the placement. Domino is an enterprise AI platform. A Project is the unit of work. The product home prints speed and IL5 lines; those stay qualified.",
    "Slide 3 is the zero-prior list. Model, train versus infer, experiment, registry, serving, MLOps, governance, Kubernetes at outline. No Domino words yet.",
    "Slide 4 is the Project. Files, Environments, datasets, experiments, models, and Apps live here. The Workspace is a client of that Project.",
    "Slide 5 is Workspace, hardware tier, and Environment. The Environment is a Docker image. Every session boots a container. A missing revision cannot reconstruct the run.",
    "Slide 6 is two planes. Control plane records. Data plane runs pods. GPU question versus card question.",
    "Slide 7 is Jobs, experiments, and datasets. Leave the notebook for a Job when the work should repeat.",
    "Slide 8 is the registry and the model card. MLflow-based. Lineage: code, Environment, workspace, datasets. Chen 2020 is nearby work.",
    "Slide 9 is how it reaches users. Model API for another system. App on port 8888 for a person. App Hub is the homepage name.",
    "Slide 10 is Nexus. One control plane, many data planes, optional. Remote planes may lack local-plane features. Re-read the installed page.",
    "Slide 11 is when not to use it. Databricks, SageMaker, OpenShift AI, Kubeflow, Dataiku. IL5 is not an ATO. Percentages are not an SLA.",
    "Slide 12 is the decision. Sketch the lifecycle. Name the plane, the record, and the tool you refuse. Measure your queue.",
    "Slides 13–15 are extra NotebookLM detailed-deck pages. Ledger and debates win where they differ. IL5 and 6× stay qualifications.",
    "NotebookLM detailed deck, continued. Vault gallery: Presentation slides.md. The PowerPoint file stays in heavy output, off the public site.",
    "Last NotebookLM slide. The 12-slide TDD spine is the study cut; this 15-page deck is the W8 export."
  ],
  cards: [
    {question:"What is the unit of work?",detail:"A Project, not the IDE window.",why:"The reconstructable unit is the recorded context.",example:"Files, Environment, experiments, models, Apps.",cardSlide:2},
    {question:"Name train versus infer.",detail:"Training fits parameters. Inference uses the model.",why:"Mixing them breaks the lifecycle.",example:"Job versus endpoint.",cardSlide:3},
    {question:"How is a Workspace different from an Environment?",detail:"Workspace is the IDE. Environment is the image it boots.",why:"A missing revision cannot rebuild the run.",example:"Jupyter on a GPU tier, DSE image.",cardSlide:4},
    {question:"Which plane holds the model card?",detail:"Control plane.",why:"Metadata is not the GPU.",example:"Registry versus Workspace pod.",cardSlide:5},
    {question:"When do you leave a Workspace for a Job?",detail:"When the work should repeat without a person in the IDE.",why:"A notebook left open is not a pipeline.",example:"Nightly retrain.",cardSlide:6},
    {question:"What does a model card record?",detail:"Code, Environment, workspace settings, datasets.",why:"That is the system of record.",example:"Rebuild last week's run from the card.",cardSlide:7},
    {question:"App or Model API for a person with a browser?",detail:"App, port 8888, Launchpad.",why:"Another system wants an endpoint.",example:"Streamlit versus Flask Model API.",cardSlide:8},
    {question:"What is Nexus?",detail:"One control plane plus many data planes. Optional.",why:"Locality is the warrant.",example:"Compute next to data that cannot move.",cardSlide:9},
    {question:"Is the IL5 sentence an ATO?",detail:"No. It is a homepage claim.",why:"A PA names an offering. A lab still issues an ATO.",example:"E3B: no Domino product paper.",cardSlide:10},
    {question:"When is Databricks better?",detail:"When the lakehouse already owns data and registry.",why:"Nexus would be a second control plane.",example:"Unity Catalog as system of record.",cardSlide:11},
    {question:"What is the day's falsifier?",detail:"A feature tour with no system of record, no planes, and no refusal.",why:"The mission is a design-review placement.",example:"In, out, and measure.",cardSlide:12}
  ]
};

DATA.looks = {
  "1:0": "<pre>Not the product:\n[ Jupyter on a GPU ]\n\nThe product:\n[ Project | Environment | experiment | model card ]</pre><p class='flagnote'>The homepage 6× line is briefing wording, not an SLA.</p>",
  "1:1": "<table class='tbl'><thead><tr><th></th><th>Wins when</th></tr></thead><tbody><tr><td>Domino</td><td>Governed lifecycle across IDEs, maybe many clusters</td></tr><tr><td>Databricks</td><td>Lakehouse already owns data and registry</td></tr><tr><td>SageMaker</td><td>AWS endpoints already exist</td></tr><tr><td>Kubeflow</td><td>The team will operate CRDs</td></tr></tbody></table>",
  "2:0": "<p>Model, train, infer, experiment, registry, serving, MLOps, governance. Write them before any Domino word.</p>",
  "3:0": "<pre>Project  — unit of work\nWorkspace — IDE on a hardware tier\nEnvironment — Docker image the session boots\nRevision — rebuild after an edit</pre>",
  "4:0": "<table class='tbl'><thead><tr><th>Control plane</th><th>Data plane</th></tr></thead><tbody><tr><td>UI, API, registry, image builder</td><td>Workspaces, Jobs, Apps, endpoints</td></tr><tr><td>Mongo / Postgres metadata</td><td>Ephemeral pods, GPUs</td></tr></tbody></table>",
  "5:0": "<p>A Job is the non-interactive path. Datasets are versioned. Remote Nexus planes historically lacked Datasets — re-read the installed page.</p>",
  "6:0": "<p>Registry is MLflow-based. Card fields: code, Environment, workspace settings, datasets. Chen 2020 is nearby work, not a Domino eval.</p>",
  "7:0": "<table class='tbl'><thead><tr><th></th><th>Model API</th><th>App</th></tr></thead><tbody><tr><td>Packaging</td><td>Flask / Plumber</td><td>Dash / Streamlit / Shiny / HTTP</td></tr><tr><td>Port</td><td>endpoint</td><td>8888</td></tr><tr><td>Consumer</td><td>Another system</td><td>A person</td></tr></tbody></table>",
  "8:0": "<p>Nexus: one control plane, many data planes, optional. Remote planes may lack Model APIs, Apps, Datasets. Check 6.2 before repeating.</p>",
  "9:0": "<p>Elicit returned no Domino product paper (E3B, 2026-10-11). 'Deployed in DoD IL5 environments' is not a PA. S14 and S15 are nearby work.</p>",
  "10:0": "<p>50% / 6× / 40% / 75% are briefing lines. 'Any tool' is entry, not exit. Exporting a pickle is not exporting Mongo and the Environment catalog.</p>",
  "11:0": "<ol><li>Sketch Project → Workspace / Job → Experiment → Registry → Endpoint or App.</li><li>Name the plane and the record.</li><li>Name the competitor you refuse.</li><li>Do not quote IL5 or 6× as a contract.</li></ol>"
};

DATA.watch = [
  {who:"Nick Elprin",title:"Accelerate impact, RevX 2024",url:"https://www.youtube.com/watch?v=Cr0K48Iw7n4",why:"Model management, Flows, AI Gateway. Ledger S12.",min:"41 min"},
  {who:"Jarrod Vawdrey",title:"Mastering MLOps, RevX 2025",url:"https://www.youtube.com/watch?v=nWYtj1Rj6GQ",why:"MLOps hierarchy, MLflow inside Domino. Ledger S13.",min:"30 min"},
  {who:"Nick Elprin",title:"The Modern AI Factory, RevX 2025",url:"https://www.youtube.com/watch?v=HQIbqh0_MPQ",why:"Laboratory plus factory. Watch after the architecture page.",min:"47 min"},
  {who:"RevX playlist",title:"RevX 2024 Rewind",url:"https://www.youtube.com/playlist?list=PLTPpVn_GzeMGTBO1cR2BWH3cuBNX5cwH3",why:"Extra customer talks. Anecdotes are not SLAs.",min:"playlist"}
];

DATA.books = [
  {kind:"Book",title:"Implementing MLOps in the Enterprise",who:"Yaron Haviv, Noah Gift",url:"https://learning.oreilly.com/library/view/implementing-mlops-in/9781098136574"},
  {kind:"Book",title:"MLOps with Databricks",who:"Maria Vechtomova",url:"https://learning.oreilly.com/library/view/mlops-with-databricks/9798341608245/"},
  {kind:"Book",title:"Designing Machine Learning Systems",who:"Chip Huyen",url:"https://learning.oreilly.com/library/view/designing-machine-learning/9781098107956/"},
  {kind:"Book",title:"Machine Learning Platform Engineering",who:"Benjamin Tan Wei Hao, Shanoop Padmanabhan",url:"https://learning.oreilly.com/library/view/machine-learning-platform/9781633437333/"},
  {kind:"Book",title:"The Definitive Guide to Machine Learning Operations in AWS",who:"SageMaker-side context",url:"https://learning.oreilly.com/library/view/the-definitive-guide/9798868810763"}
];

DATA.packPages = [
  {slug:"mission",t:"Mission"},
  {slug:"deep-dive",t:"Learning deep dive"},
  {slug:"ref-arch",t:"Reference architecture"},
  {slug:"claims-debates",t:"Claims and debates"},
  {slug:"elicit",t:"Elicit light research"},
  {slug:"source-ledger",t:"Source ledger"},
  {slug:"glossary",t:"Glossary"},
  {slug:"quiz-bank",t:"Quiz bank"},
  {slug:"cheatsheet",t:"Cheatsheet"},
  {slug:"watch-reading",t:"Talks and O'Reilly"},
  {slug:"day-plan",t:"Day plan"},
  {slug:"nblm-practitioner-working-briefing-domino-data-lab-en",t:"Working briefing"},
  {slug:"nblm-enterprise-ai-platform-analysis-domino-data-lab-",t:"Mental models"},
  {slug:"nblm-domino-data-lab-practice-authoring-playbook-arch",t:"Practice playbook"},
  {slug:"nblm-catalog-of-edge-cases-architectural-traps-and-mi",t:"Edge cases"},
  {slug:"nblm-executive-decision-packet-enterprise-ai-platform",t:"Decision packet"},
  {slug:"nblm-executive-briefing-domino-data-lab-enterprise-ai",t:"Executive briefing"},
  {slug:"nblm-domino-data-lab-enterprise-ai-platform-study-gui",t:"Study guide"},
  {slug:"nblm-domino-data-lab-claims-and-analysis",t:"Claims table"},
  {slug:"nblm-domino-ai-platform",t:"NotebookLM mind map"}
];

DATA.fromReports = [
  {slug:"deep-dive",title:"Learning deep dive",point:"Control plane records. Data plane runs. Put the GPU and the model card on the correct plane."},
  {slug:"ref-arch",title:"Reference architecture",point:"One control plane, many data planes. Project is the unit of work. MLflow is opt-in."},
  {slug:"claims-debates",title:"Claims and debates",point:"A warrant is the If X then Y that makes a source count. An IL5 sentence does not warrant an ATO. A homepage 6× does not warrant an SLA."},
  {slug:"elicit",title:"Elicit light",point:"E3B run 2026-10-11: no Domino product paper. MLflow 2020 and Albertoni 2023 are nearby work."},
  {slug:"source-ledger",title:"Source ledger",point:"S1–S42. Official architecture and user-guide pages win. Marketing is on the ledger so it can be qualified. Next unused id is 43."},
  {slug:"mission",title:"Mission",point:"Success is a design-review sketch plus a named refusal, not a tenant tour."},
  {slug:"nblm-practitioner-working-briefing-domino-data-lab-en",title:"Working briefing",point:"NotebookLM briefing from the pack. Ledger and debates win where they differ."},
  {slug:"nblm-executive-decision-packet-enterprise-ai-platform",title:"Decision packet",point:"Room-craft packet. UNKNOWN slots stay empty. IL5 and 6× are not contracts."},
  {slug:"nblm-domino-data-lab-enterprise-ai-platform-study-gui",title:"Study guide",point:"Quiz and glossary from NotebookLM. Check every row against S1–S37."}
];

DATA.debateProblem = {
  practical:"Teams buy a notebook host when they needed a system of record, or they buy Domino when Databricks, SageMaker, OpenShift AI, or Kubeflow already owns the job.",
  research:"Which public claims are definitional, which are causal architecture stories, which are analogies from nearby MLOps papers, and which are briefing color.",
  soWhat:"A placement that cannot name its warrant will not survive a design review."
};

DATA.debates = [
  {title:"The product is the system of record",src:"S4",
   idA:"E1A",idB:"E1B",idBoth:"E1W",kindA:"desk",kindB:"lab-local",kindBoth:"desk",
   statusA:"run 2026-10-11",statusB:"unrun",statusBoth:"run 2026-10-11",
   claimA:"Domino's product is the recorded context: code, Environment, hardware, datasets, and parameters tied to a model card, not the IDE window. Lineage holds only when code logs to MLflow [S24].",
   claimB:"What users feel is a hosted Jupyter / VS Code / RStudio on a GPU. Without that workspace, the registry is a form.",
   warrant:"If the reconstructable unit is the recorded context, then the IDE is a client of that unit. If users only ever open Workspaces, the governance story is unearned.",
   assume:"Lineage captures the data version that was read. People will look at the card. The Environment revision still exists. Code actually calls MLflow.",
   qualify:"Both readings can be true in one deployment. Governance is the product only for work that logs to MLflow.",
   testA:"From official docs, list every field a model card stores. Run: fields listed; data version and hardware not enumerated [S4].",
   testB:"With a tenant GO, time-to-first-notebook versus time-to-first-registered-model.",
   testBoth:"Find a documented path where a Workspace run is not associated with an experiment. Run: no MLflow call, no experiment [S24]."},
  {title:"Any-tool means no lock-in",src:"S1",
   idA:"E2A",idB:"E2B",idBoth:"E2W",kindA:"desk",kindB:"desk",kindBoth:"lab-compare",
   statusA:"run 2026-10-11",statusB:"run 2026-10-11",statusBoth:"unrun",
   claimA:"Domino is an open host: bring Jupyter, R, SAS, MATLAB, Spark, Ray, Dash, Streamlit. Export models to SageMaker, Snowflake, NVIDIA Fleet Command, or a container image (Databricks is not a named export target).",
   claimB:"Work, Environments, hardware tiers, and Launchpad live in Domino. Leaving means rebuilding that system of record somewhere else.",
   warrant:"If a tool runs as a container image Domino schedules, that is supported, not free to walk away. Exporting an artifact is not exporting the platform.",
   assume:"Export includes Environment, data access, and review workflow, not only a pickle.",
   qualify:"Openness is real for entry. What travels is runnable code plus Environment, not the model card.",
   testA:"From docs, list export formats and which lineage travels with them. Run: image travels; card/lineage not shown to travel [S26][S28].",
   testB:"List what is only in Domino metadata stores (Mongo/Postgres per S2). Run: projects/users/orgs named; runs/registry/lineage store not named.",
   testBoth:"Export one Model API to SageMaker and record what broke."},
  {title:"IL5 and compliance logos are the closed-lab answer",src:"S10",
   idA:"E3A",idB:"E3B",idBoth:"E3W",kindA:"desk",kindB:"desk",kindBoth:"desk",
   statusA:"run 2026-10-11",statusB:"run 2026-10-11",statusBoth:"run 2026-10-11",
   claimA:"Marketing states ISO 27001, ISO 9001, SOC 2, HIPAA, GDPR, 21 CFR Part 11 support, and that Domino is deployed in DoD IL5 environments.",
   claimB:"A logo is not an authorization for this program. Nearby MLOps papers are not a Domino eval.",
   warrant:"If DISA issued a PA for a named offering, that offering may host IL5 data in that offering. A vendor homepage does not warrant our lab is approved.",
   assume:"'Deployed in IL5 environments' means Domino holds the PA, not that a customer dropped it into someone else's IL5 cluster.",
   qualify:"Compliance program claim, not ATO. FedRAMP Marketplace lookup still open. Do not say not listed yet.",
   testA:"Find a primary compliance or DISA page. Run: none found. Trust Center lists SOC 2 / ISO 27001 / HIPAA / GDPR and is silent on IL5 [S16][S17].",
   testB:"Elicit returned no Domino product eval. Keep S14 and S15 labeled nearby work.",
   testBoth:"Compare remote data-plane feature gaps with an IL5 isolation story. Run: remote plane still depends on a live control-plane path [S21]."},
  {title:"Speed and cost multiples are the product",src:"S18",
   idA:"E4A",idB:"E4B",idBoth:"E4W",kindA:"desk",kindB:"desk",kindBoth:"lab-local",
   statusA:"run 2026-10-11",statusB:"run 2026-10-11",statusBoth:"unrun",
   claimA:"Self-serve Environments, hardware tiers, and a recorded lifecycle should beat a laptop-plus-ticket-queue.",
   claimB:"50% lifecycle, 6× development, 40% infra, 75% onboarding are briefing lines, not an SLA.",
   warrant:"Cache of Environments and elastic hardware can cut wait time. A homepage percentage is a claim about unnamed customers.",
   assume:"Hardware tiers are actually available. Chargeback is enforced. Auto-shutdown is a runtime cap from startup, not idle detection [S31].",
   qualify:"Teach the mechanism. Repeat a percentage only after measuring your queue. The four figures have no study behind them [S18][S19].",
   testA:"From docs, describe pause/resume and autoscaling Apps. Run: stop/resume exists; auto-shutdown counts from startup; Apps HPA, no scale-to-zero stated [S30][S32].",
   testB:"Find the study behind 6× / 40% or mark unverified. Run: unverified. Forrester TEI is 542% ROI and does not produce these four figures [S19].",
   testBoth:"Leave a GPU Workspace idle and read the cost dashboard."},
  {title:"Nexus makes one lakehouse unnecessary",src:"S21",
   idA:"E5A",idB:"E5B",idBoth:"E5W",kindA:"desk",kindB:"desk",kindBoth:"lab-local",
   statusA:"run 2026-10-11",statusB:"run 2026-10-11",statusBoth:"unrun",
   claimA:"Control plane plus data planes lets compute move to the data across clouds and on-prem.",
   claimB:"If work already lives in Databricks, SageMaker, OpenShift AI, or Kubeflow on one cluster, Nexus is a second control plane. Remote-plane Model API / App / Dataset gaps are history as of 5.9 / 6.0; remaining gaps are Starburst sources and Dataset CLI [S20][S22][S23].",
   warrant:"If data cannot move, moving the workspace to that plane is the point. If data already sits next to the lakehouse, the extra plane is coordination cost.",
   assume:"Network path from control plane to data plane is approved. Feature gaps have closed in the installed version.",
   qualify:"Nexus is optional. Single pane of glass is the product page; the contract is S21. E5B is partial: SageMaker and Kubeflow pages not retrieved.",
   testA:"Current Nexus page: which workloads run on remote planes. Run: Workspaces, Jobs, Apps, endpoints on any plane; Starburst and Dataset CLI stay local [S20][S21].",
   testB:"Competitor architecture pages for one-cluster defaults. Run partial: Databricks one metastore per region [S36]; OpenShift AI one cluster [S37].",
   testBoth:"Attach a second plane and publish an App there; record what the UI forbids."},
  {title:"App Hub is how AI reaches users",src:"S8",
   idA:"E6A",idB:"E6B",idBoth:"E6W",kindA:"desk",kindB:"desk",kindBoth:"lab-local",
   statusA:"run 2026-10-11",statusB:"run 2026-10-11",statusBoth:"unrun",
   claimA:"Publishing a Streamlit / Dash / Shiny / Flask App is the path from a Project to users, with auth and a hardware tier.",
   claimB:"Many enterprises already serve models as SageMaker endpoints, OpenShift routes, or a custom gateway. A Domino App is another URL to govern.",
   warrant:"If the consumer is a person with a browser inside the same identity domain, an App is the shorter path. If the consumer is another system, an endpoint or export is the shorter path.",
   assume:"Apps serve port 8888. By default the App acts as its publisher [S33]. Anyone-can-access is not used on sensitive data.",
   qualify:"App Hub on the homepage is the product name. The contract is the Apps user guide. Launchpad is the older UI name for Deploy > Apps.",
   testA:"Launchpad versus project Deployments: who sees what. Run: per-App view mode plus project edit rights [S33].",
   testB:"Model API versus App: process model and auth. Run: Flask/Plumber + token vs web app + identity [S33][S34][S35].",
   testBoth:"Publish a Streamlit App and a Model API from one Project; compare isolation."}
];

DATA.drills = {
  where:{title:"Where does it run?",ask:"Where does this work run?",
    options:["Control plane","Data plane","A remote Nexus plane","Another platform"],
    items:[
      {p:"The model card",a:0,why:"Metadata lives on the control plane.",src:"S2"},
      {p:"A GPU Workspace",a:1,why:"Workspaces are data-plane pods.",src:"S2"},
      {p:"Compute next to data that cannot leave a region",a:2,why:"That is the Nexus locality job.",src:"S3"},
      {p:"Training that already lives in Databricks",a:3,why:"Nexus would be a second control plane.",src:"S3"}
    ]},
  auth:{title:"What is authorized?",ask:"What does this sentence buy you?",
    options:["A PA or ATO","A program claim","An SLA","Nothing without a primary page"],
    items:[
      {p:"Deployed in DoD IL5 environments on the homepage",a:1,why:"Marketing sentence. Not a PA letter.",src:"S10"},
      {p:"SOC 2 / HIPAA logos",a:1,why:"Evidence of a program, not of this lab.",src:"S10"},
      {p:"50% lifecycle reduction",a:2,why:"Treat as briefing until you measure.",src:"S10"},
      {p:"A DISA PA URL for a named offering (not yet on the ledger)",a:0,why:"That would be the desk test E3A result if found.",src:"S10"}
    ]},
  altitude:{title:"Which idea is this?",ask:"Which layer does this belong to?",
    options:["Placement","Lifecycle","Hybrid","Trust"],
    items:[
      {p:"Project is the unit of work",a:0,why:"That is the quadrant.",src:"S1"},
      {p:"Model card lineage",a:1,why:"That is the record.",src:"S4"},
      {p:"Control plane versus data plane",a:2,why:"That is the architecture split.",src:"S2"},
      {p:"IL5 sentence is not an ATO",a:3,why:"That is the trust boundary.",src:"S10"}
    ]}
};
