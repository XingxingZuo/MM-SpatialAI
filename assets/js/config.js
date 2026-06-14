const project_name = `Multi-Modal Spatial AI for Robust Navigation and Open-World Understanding `
const proj_small_caps = `<span class="small-caps">MM-SpatialAI Workshop</span>: `
const conference_details = ['ICRA 2026', 'https://2026.ieee-icra.org/', 'Vienna, Austria', 'assets/images/icra26_logo.png']
const workshop_date = `June 1, 2026`
const workshop_room = `Lehar 3, VIECON / Messe Wien`

const talk_speaker_details = {
  'aw': ['Alex Wong', './assets/images/talks/alex-wong.jpg', 'Assistant Professor', 'Yale University', 'https://vision.cs.yale.edu/members/alex-wong/', "Unsupervised Extension of Multimodal Depth Perception Across Scenes and Sensors", "Training deep neural networks requires tens of thousands to millions of examples. One approach to meet this demand is to curate large-scale datasets using data engines; the sophistication of these engines grows with additional sensing modalities and even more with complex tasks like 3D reconstruction, e.g., depth estimation. I will present an alternative that leverages multi-sensor validation as an unsupervised (or self-supervised) training objective for multimodal depth estimation. I will detail how one can train these models in practice and discuss a method that addresses limitations of existing unsupervised learning and data augmentation strategies for depth estimation. I will then transfer these intuitions to an online setting to enable multimodal depth estimators to adapt to test-time data in a stream. However, as these models adapt, they will inevitably forget. To address catastrophic forgetting, we will introduce methods that enable continual learning over new 3D scenes and generalize it to extend multimodal models to new capabilities by enabling the use of new sensors and modalities.", "Alex Wong is an Assistant Professor of Computer Science and the director of the Vision Laboratory at Yale University. Prior to joining Yale, he was an Adjunct Professor at Loyola Marymount University from 2018 to 2020. He received his Ph.D. in Computer Science from the University of California, Los Angeles (UCLA) in 2019 and was a post-doctoral research scholar at UCLA from 2020 to 2022. His research lies in the intersection of machine learning, computer vision, and robotics, and focuses on multimodal 3D reconstruction, unsupervised learning, robust vision, and adaptive methods. Wong has served as an Area Chair for CVPR, ICCV, ICLR, ICML, NeurIPS, WACV, and is an Action Editor for the Transactions on Machine Learning Research (TMLR). He is also an elected member of the IEEE Signal Processing Society Technical Committee. His work has been recognized by the outstanding student paper award at the Conference on Neural Information Processing Systems (NeurIPS) 2011 and the best paper award in robot vision at the International Conference on Robotics and Automation (ICRA) 2019."],
  'hb': ['Hermann Blum', './assets/images/talks/hermann_blum.webp', 'Junior Professor', 'University of Bonn', 'https://hermannblum.net/', "The future of mapping: Beyond Reconstruction", "In this talk, I will question whether 3D reconstruction is still a necessary part of mapping in the age of feedforward models and present some alternatives. Then, I discuss scene graphs as an alternative map representation and their applications for mobile manipulation.", "Hermann Blum studied Electrical Engineering and Information Technology at ETH Zürich, with a 1 year stay at Imperial College London. He obtained his PhD from ETH Zürich in 2022 under the advice of Prof. Roland Siegwart. After an internship at Google Research he joined the lab of Prof. Marc Pollefeys at ETH Zürich as a PostDoc, leading the robotics team. In 2024 he started as a Junior Professor at the University of Bonn and the Lamarr Institute. Hermann's research focuses on machine learning for robotic perception and scene understanding, developing models and methods to understand an agent's environment semantically and geometrically. He is known for his public benchmarks on semantic perception, SLAM, and furniture interaction, as well as for regular workshops that he organizes in Robotics and Computer Vision conferences."],
  'ds': ['Dezhen Song', './assets/images/talks/Dezhen-Song.jpg', 'Professor', 'MBZUAI', 'https://mbzuai.ac.ae/study/faculty/dezhen-song/', "Proprioceptive Localization: When Everything Else Fails.", "Localization is a critical navigation function for autonomous vehicles and mobile robots. Most localization methods rely on global position system (GPS), a laser ranger finder, and/or a camera which are exteroceptive sensors that are dependent upon the perception and recognition of landmarks in the environment. However, in urban areas, GPS signals may be unavailable because high-rise buildings may block GPS signals or be completely spoofed due to geopolitical conflicts. On the other hand, poor weather and lighting conditions, such as severe snowstorm or sandstorms, may challenge all exteroceptive sensors. Here we focus on proprioceptive localization (PL) methods which refer to a new class of robot egocentric localization methods that do not rely on the perception and recognition of external landmarks. These methods depend on a prior map and proprioceptive sensors such as inertial measurement units (IMUs) and/or wheel encoder which are naturally immune to adversary environmental conditions that may hinder exteroceptive sensors. PL is intended to be a low-cost and fallback solution when everything else fails. We start with the minimal solution: proprioceptive localization assisted by magnetoreception (PLAM) which employs a gyroscope and a compass to sense heading changes and matches the heading sequence with a pre-processed heading graph to localize the robot. Then we gradually incorporate more proprioceptive information to expand PL from intermittent localization to continues localization which is graph-based proprioceptive localization (GBPL). If time permits, we will introduce how GBPL can be expanded and speeded up using a collaborative localization framework under vehicle-to-vehicle (V2V) communication.", "Dezhen Song is a Vice Provost and Professor of Robotics at MBZ University of Artificial Intelligence (MBZUAI), Abu Dhabi, UAE. Prior to that he was a Professor and Associate Department Head with Department of Computer Science and Engineering, Texas A&M University, College Station, Texas, USA. Song received his Ph.D. in 2004 from University of California, Berkeley; MS and BS from Zhejiang University in 1998 and 1995, respectively. Song's primary research area is robot perception, networked robots, visual navigation, automation, and stochastic modeling. From 2008 to 2012, Song was an Associate Editor of IEEE Transactions on Robotics (T-RO). From 2010 to 2014, Song was an Associate Editor of IEEE Transactions on Automation Science and Engineering (T-ASE). Song was a Senior Editor for IEEE Robotics and Automation Letters (RA-L) from 2017 to 2021 and currently is a Senior Editor for IEEE Transactions on Automation Science and Engineering (T-ASE). He is also a multimedia editor and chapter author for Springer Handbook of Robotics. His research has resulted in one monograph and more than 160 refereed conferences and journal publications. Dr. Song received the NSF Faculty Early Career Development (CAREER) Award in 2007, the Kayamori Best Paper Award of the 2005 IEEE International Conference on Robotics and Automation (ICRA), the 2022 Best Paper Awards of the LCT 2022 and 2024 Affiliated Conference, the 1st place in the GM/SAE AutodriveChallenge II competition in 2023, and the Amazon Research Award in 2020."],
  'tm': ['Timothy D. Barfoot', './assets/images/talks/Tim Barfoot.jpeg', 'Professor', 'University of Toronto', 'https://discover.research.utoronto.ca/17296-tim-barfoot', "Roads, Forests, and Lakes, Oh My! New Multi-Modal Datasets and Some Thoughts", "The thesis of this workshop is that multi-modal sensing may be the key to robust open-world navigation and understanding. This may indeed by true and to this end I will introduce three new multi-modal robotics datasets that we have launched in the last year: Boreas Road-Trip extends our popular Boreas all-weather autonomous driving dataset to more challenging scenarios such as tunnels, skyways, and rural roads; CANOE provides data on a remote lake from an unmanned surface vessel; FoMo (with U Laval) provides multi-season data on rugged forest roads. I will also offer some observations about the commonalities and differences between these different operating domains from the sensor standpoint and attempt to make the case for a less common sensor to be more prominent in our perception solutions: imaging radar.", "Prof. Timothy Barfoot (University of Toronto Institute for Aerospace Studies - UTIAS) works in the area of autonomy for mobile robots targeting a variety of applications. He develops methods (localization, mapping, planning, control) to allow robots to operate over long periods of time in large-scale, unstructured, three-dimensional environments, using rich onboard sensing (e.g., cameras, laser rangefinders, radar) and computation. Timothy holds a BASc (9T6+PEY, Aerospace Option) from the UofT Engineering Science program and a PhD from UTIAS in robotics. He took up his academic position at UTIAS in May 2007, after spending four years at MDA Space (builder of the well-known Canadarm space manipulators), where he developed autonomous vehicle navigation technologies for both planetary rovers and terrestrial applications such as underground mining. He is a Fellow of the IEEE, held a Canada Research Chair (Tier 2) for the full 10 years, was an Early Researcher Awardee in the Province of Ontario, and has received three paper awards at the IEEE International Conference on Robotics and Automation (ICRA 2010, 2021, 2025) as well as four at the Conference on Robots and Vision (CRV 2014, 2016, 2023, 2025). Timothy was also a Visiting Professor at the University of Oxford in 2013 and 2024 and worked as Director of Autonomous Systems at Apple in California in 2017-9. He holds the position of Distinguished Engineer at Oxa Autonomy Ltd (parttime). He is Director of the UofT Robotics Institute, Director of the UofT Collaborative Specialization in Robotics, co-Faculty Advisor of UofT's self-driving car team that won the SAE Autodrive competition several times, and was previously Chair of the UofT Engineering Science Robotics Major and Faculty Affiliate of the Vector Institute. He is the Editor in Chief of the IEEE Transactions on Field Robotics (T-FR), deputy EiC of the International Journal of Robotics Research (IJRR), served on the Foundation Board of Robotics: Science and Systems (RSS), and served as the General Chair of Field and Service Robotics (FSR) 2015, which was held in Toronto. He is the author of State Estimation for Robotics (Cambridge 2017, 2024), which is free to download from his webpage, and co-editor/co-author of the SLAM Handbook (Cambridge 2026)."],
  'mc': ['Margarita Chli', './assets/images/talks/MargaritaChli.png', 'Professor', 'ETH Zurich & University of Cyprus', 'https://margaritachli.com/blog/dr-chli-margarita/the-lab', "Robust perception for single- and multi-robot systems: are we there yet?", "With autonomous navigation being more relevant than ever, robustness lies at the core of the applicability and adaptability of autonomous systems. Redundancy in sensing modalities onboard a single robot, as well as the deployment of multiple robots for the same task, promises a step change in high-fidelity autonomy. This talk will highlight our recent progress toward this goal at the Vision for Robotics Lab (V4RL) of the University of Cyprus and ETH Zurich (www.v4rl.com), as well as some of the key challenges we continue to face.", "Margarita is Professor of Robotic Vision and Director of the Vision for Robotics Lab at the University of Cyprus and ETH Zurich. Her work has contributed to the first vision-based autonomous flight of a small drone and the first demonstration of collaborative monocular SLAM for a swarm of drones. Margarita has delivered invited keynote talks at the World Economic Forum in Davos, TEDx, and ICRA. More recently, she was awarded an ERC Consolidator Grant—one of Europe’s most prestigious funding schemes for frontier research—to expand her team at the University of Cyprus and advance research in robotic perception. She is Co-Chair of the IEEE RAS Technical Committee on Computer and Robot Vision and serves on Cyprus’s National AI Taskforce, advising the government on AI policy."],
  'sc': ['Sebastian Scherer', './assets/images/talks/Sebastian-Scherer.jpg', 'Associate Research Professor', 'CMU', 'https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/', "Multi-Modal Perception for Resilient Autonomy", "Resilience is key to enable the next generation on robots to operate intelligently. However, the unstructured nature of the real-world requires nuanced decision making of the robot. In this talk I will outline some of our approaches, progress, and results on multi-modal sensing, providing nuanced perception inputs, as well as navigation in difficult terrain, and future directions of our research.", "Sebastian Scherer is an Associate Research Professor at the Robotics Institute (RI) at Carnegie Mellon University (CMU). His research focuses on enabling autonomy in challenging environments and previously led CMU’s entry to the SubT challenge. He and his team have shown several firsts for autonomy for flying robots and off-road driving. Dr. Scherer received his B.S. in Computer Science, M.S. and Ph.D. in Robotics from CMU in 2004, 2007, and 2010."],
  'ad': ['Andrew Davison', './assets/images/talks/AndrewDavison.jpg', 'Professor', 'Imperial College London', 'https://www.doc.ic.ac.uk/~ajd/', "From SLAM to Spatial AI", "To enable the next generation of smart robots and devices which can truly interact with their environments, Simultaneous Localisation and Mapping (SLAM) will progressively develop into a general real-time geometric and semantic `Spatial AI' perception capability. I will give many examples from our work on gradually increasing visual SLAM capability over the years. However, much research must still be done to achieve true Spatial AI performance. A key issue is how estimation and machine learning components can be used and trained together as we continue to search for the best long-term scene representations to enable intelligent interaction. Further, to enable the performance and efficiency required by real products, computer vision algorithms must be developed together with the sensors and processors which form full systems, and I will cover research on vision algorithms for non-standard visual sensors and graph-based computing architectures.", "Andrew Davison is Professor of Robot Vision at Imperial College London. His long-term research focus is on SLAM and its evolution towards general `Spatial AI'. With his collaborators he has consistently developed breakthrough systems, including MonoSLAM, KinectFusion, SLAM++, iMAP and Gaussian Splatting SLAM. Recent prizes include Best Paper at ECCV 2016, the Helmholtz Prize at ICCV 2021, and Best Demo at CVPR 2024. He has also taken this technology into real applications, particularly the Dyson 360 Eye robot vacuum cleaner and as co-founder of SLAMcore. He was elected Fellow of the Royal Academy of Engineering in 2017, and Fellow of the Royal Society in 2023."],
  'tbd1': ['TBD', './assets/images/talks/TBD', 'TBD', 'TBD', 'TBD', '', '', ''],
  'tbd2': ['TBD', './assets/images/talks/Sebastian-Scherer.jpg', 'Associate Research Professor', 'Carnegie Mellon University', 'https://theairlab.org/team/sebastian/', '', '', ''],
}

const organizers_details = [
  ['Xingxing Zuo', 'assets/images/organizers/XingxingZuo.png', 'Assistant Professor', 'MBZUAI', 'https://xingxingzuo.github.io/'],
  ['Yafei Hu', 'assets/images/organizers/YafeiHu.png', 'Researcher', 'Robotics and AI Institute', 'https://jeffreyyh.github.io/'],
  ['Lukas Schmid', 'assets/images/organizers/LukasSchmid.png', 'Research Scientist', 'MIT', 'https://schmluk.github.io/'],
  ['Ayoung Kim', 'assets/images/organizers/AyoungKim.jpg', 'Associate Professor', 'Seoul National University', 'https://ayoungk.github.io/'],
  ['Stefan Leutenegger', 'assets/images/organizers/StefanLeutenegger.png', 'Associate Professor', 'ETH Zurich', 'https://mrl.ethz.ch/the-group/people/lab-members/stefan-leutenegger.html'],
  ['Guoquan Huang', 'assets/images/organizers/GuoquanHuang.jpg', 'Professor', 'University of Delaware', ' https://udel.edu/~ghuang/'],
]


const pc_details = [
  ['Yong Liu', 'assets/images/programcommittee/yongliu.jpg', 'Professor', 'Zhejiang University', 'https://person.zju.edu.cn/en/yongliu/'],
  ['Huai Yu', 'assets/images/programcommittee/huaiyu.png', 'Associate Professor', 'Wuhan University', 'https://levenberg.github.io/'],
  ['Chuchu Chen', 'assets/images/programcommittee/chuchuchen.jpg', 'Assistant Professor', 'George Washington University', 'https://www.chuchuchen.net/'],
  ['Tao Li', 'assets/images/programcommittee/taoli.jpg', 'Associate Researcher', 'Zhejiang Univ of Tech.', 'https://scholar.google.com/citations?user=APrTJ5kAAAAJ&hl=zh-CN'],
  ['Jiajun Lv', 'assets/images/programcommittee/jiajunlv.jpg', 'Research Fellow', 'Zhejiang University', 'https://april.zju.edu.cn/team/jiajun-lv/'],
  ['Qingshan Xu', 'assets/images/programcommittee/QingshanXu.jpg', 'Professor', 'University of Science and Technology of China', 'https://ghixu.github.io/'],
  ['Yuhang Ming', 'assets/images/programcommittee/YuhangMing.jpg', 'Lecture', 'Hangzhou Dianzi Universtiy', 'https://yuhangming.github.io/'],
  ['Jikai Wang', 'assets/images/programcommittee/JikaiWang.jpg', 'Associate Researcher', 'University of Science and Technology of China', 'https://www.researchgate.net/profile/Jikai-Wang'],
  ['Yan Li', 'assets/images/programcommittee/YanLi.jpg', 'Research Fellow', 'National University of  Singapore', 'https://yanyan-li.github.io/'],
  ['Boying Liu', 'assets/images/programcommittee/BoyingLiu.png', 'Research Fellow', 'Monash University', 'https://leeby68.github.io/'],
  ['Yixi Cai', 'assets/images/programcommittee/YixiCai.png', 'Postdoctoral Fellow', 'KTH Royal Institute of Technology', 'https://yixicai.com/'],
  ['Yunfan Ren', 'assets/images/programcommittee/YufanRen.jpg', 'Postdoc', ' University of Zurich', 'https://renyunfan.cn/'],
  ['Hongjia Zhai', 'assets/images/programcommittee/HongjiaZhai.jpeg', 'Postdoc', 'MBZUAI', 'https://zhaihongjia.github.io/'],
]



const contributed_paper_sessions = {
  'spot-ppt-1': [
    ['10:10 - 10:15', 'LAPS: Improving Incremental LiDAR Mapping using Active Pooling and Sampling for Neural Distance Fields', ''],
    ['10:15 - 10:20', 'Efficient Feature-Free Initialization for Monocular Visual-Inertial Systems Using A Feed-Forward 3D Model', 'assets/papers/submission-20-efficient-feature-free-initialization-for-monocular-visual-inertial-systems-using-a-feed-f.pdf'],
    ['10:20 - 10:25', 'Memory Over Maps: 3D Object Localization Without Reconstruction', 'assets/papers/submission-10-memory-over-maps-3d-object-localization-without-reconstruction.pdf'],
    ['10:25 - 10:30', 'Online Adaptive Learning for Robust LiDAR Perception in High-Performance Autonomous Racing', 'assets/papers/submission-12-online-adaptive-learning-for-robust-lidar-perception-in-high-performance-autonomous-racing.pdf'],
  ],
  'spot-ppt-2': [
    ['14:30 - 14:35', 'Exploring Bottlenecks in VLM-LLM Navigation: How 3D Scene Understanding Capability Impacts Zero-Shot VLN', 'assets/papers/submission-18-exploring-bottlenecks-in-vlm-llm-navigation-how-3d-scene-understanding-capability-impacts.pdf'],
    ['14:35 - 14:40', 'FlowHOI: Flow-based Semantics-Grounded Generation of Hand-Object Interactions for Dexterous Robot Manipulation', 'assets/papers/submission-05-flowhoi-flow-based-semantics-grounded-generation-of-hand-object-interactions-for-dexterous.pdf'],
    ['14:40 - 14:45', 'DCReg: Decoupled Characterization for Efficient Degenerate LiDAR Registration', ''],
    ['14:45 - 14:50', 'RADIO-ViPE: Online Tightly Coupled Multi-Modal Fusion for Open-Vocabulary Semantic SLAM in Dynamic Environments', 'assets/papers/submission-23-radio-vipe-online-tightly-coupled-multi-modal-fusion-for-open-vocabulary-semantic-slam-in.pdf'],
    ['14:50 - 14:55', 'VLA-RAIL: A Real-Time Asynchronous Inference Linker for VLA Models and Robots', 'assets/papers/submission-26-vla-rail-a-real-time-asynchronous-inference-linker-for-vla-models-and-robots.pdf'],
    ['14:55 - 15:00', '4D Latent Mapping for Mobile Manipulation Policy Learning', 'assets/papers/submission-33-4d-latent-mapping-for-mobile-manipulation-policy-learning.pdf'],
    ['15:00 - 15:05', 'FunFact: Building Probabilistic Functional 3D Scene Graphs via Factor-Graph Reasoning', ''],
    ['15:05 - 15:10', 'Pose-Anchored and Scale-Consistent Dense Mapping with Geometric Priors', 'assets/papers/submission-42-pose-anchored-and-scale-consistent-dense-mapping-with-geometric-priors.pdf'],
  ],
}


const coffee_poster_sessions = {
  'coffee-poster-morning': [
    ['LAPS: Improving Incremental LiDAR Mapping using Active Pooling and Sampling for Neural Distance Fields', ''],
    ['Efficient Feature-Free Initialization for Monocular Visual-Inertial Systems Using A Feed-Forward 3D Model', 'assets/papers/submission-20-efficient-feature-free-initialization-for-monocular-visual-inertial-systems-using-a-feed-f.pdf'],
    ['Memory Over Maps: 3D Object Localization Without Reconstruction', 'assets/papers/submission-10-memory-over-maps-3d-object-localization-without-reconstruction.pdf'],
    ['Online Adaptive Learning for Robust LiDAR Perception in High-Performance Autonomous Racing', 'assets/papers/submission-12-online-adaptive-learning-for-robust-lidar-perception-in-high-performance-autonomous-racing.pdf'],
    ['EgoSpot: Egocentric Multimodal Control for Hands-Free Mobile Manipulation', 'assets/papers/submission-01-egospot-egocentric-multimodal-control-for-hands-free-mobile-manipulation.pdf'],
    ['Spatial-JEPA: Geometry-Aware Self-Supervised Learning from RGBD via Cross-Attention Fusion', 'assets/papers/submission-03-spatial-jepa-geometry-aware-self-supervised-learning-from-rgbd-via-cross-attention-fusion.pdf'],
    ['Unpaired RGB-Thermal Gaussian-Splatting Using Visual Geometric Transformers', 'assets/papers/submission-04-unpaired-rgb-thermal-gaussian-splatting-using-visual-geometric-transformers.pdf'],
    ['Sign Language: Towards Sign Understanding for Robot Autonomy', 'assets/papers/submission-06-sign-language-towards-sign-understanding-for-robot-autonomy.pdf'],
    ['Image-based Geo-localization for Robotics: Are Black-box Vision-Language Models there yet?', 'assets/papers/submission-07-image-based-geo-localization-for-robotics-are-black-box-vision-language-models-there-yet.pdf'],
    ['VANG-Planner: Integrating Language Instructions into Spatial Cost for Global Path Planning', 'assets/papers/submission-08-vang-planner-integrating-language-instructions-into-spatial-cost-for-global-path-planning.pdf'],
    ['Compact Multi-Agent Gaussian Splatting SLAM', 'assets/papers/submission-13-compact-multi-agent-gaussian-splatting-slam.pdf'],
    ['Two-Stage Hint–Object Alignment for Text-to-PointCloud Localization', 'assets/papers/submission-15-two-stage-hint-object-alignment-for-text-to-pointcloud-localization.pdf'],
    ['Towards Lifelong Outdoor Magnetic-Aware SLAM: A Multi-Modal Day-and-Night Geomagnetic Dataset', ''],
    ['From Obstacles to Etiquette: Robot Social Navigation with VLM-Informed Path Selection', ''],
    ['MR-SLAM: Immersive Spatial Supervision for Multi-Robot Mapping via Mixed Reality', 'assets/papers/submission-21-mr-slam-immersive-spatial-supervision-for-multi-robot-mapping-via-mixed-reality.pdf'],
    ['Mind the Domain Gap: Multi-Modal Fusion for Off-road Navigation and Scene Understanding', 'assets/papers/submission-25-mind-the-domain-gap-multi-modal-fusion-for-off-road-navigation-and-scene-understanding.pdf'],
  ],
  'coffee-poster-afternoon': [
    ['Exploring Bottlenecks in VLM-LLM Navigation: How 3D Scene Understanding Capability Impacts Zero-Shot VLN', 'assets/papers/submission-18-exploring-bottlenecks-in-vlm-llm-navigation-how-3d-scene-understanding-capability-impacts.pdf'],
    ['FlowHOI: Flow-based Semantics-Grounded Generation of Hand-Object Interactions for Dexterous Robot Manipulation', 'assets/papers/submission-05-flowhoi-flow-based-semantics-grounded-generation-of-hand-object-interactions-for-dexterous.pdf'],
    ['DCReg: Decoupled Characterization for Efficient Degenerate LiDAR Registration', ''],
    ['RADIO-ViPE: Online Tightly Coupled Multi-Modal Fusion for Open-Vocabulary Semantic SLAM in Dynamic Environments', 'assets/papers/submission-23-radio-vipe-online-tightly-coupled-multi-modal-fusion-for-open-vocabulary-semantic-slam-in.pdf'],
    ['VLA-RAIL: A Real-Time Asynchronous Inference Linker for VLA Models and Robots', 'assets/papers/submission-26-vla-rail-a-real-time-asynchronous-inference-linker-for-vla-models-and-robots.pdf'],
    ['4D Latent Mapping for Mobile Manipulation Policy Learning', 'assets/papers/submission-33-4d-latent-mapping-for-mobile-manipulation-policy-learning.pdf'],
    ['FunFact: Building Probabilistic Functional 3D Scene Graphs via Factor-Graph Reasoning', ''],
    ['Pose-Anchored and Scale-Consistent Dense Mapping with Geometric Priors', 'assets/papers/submission-42-pose-anchored-and-scale-consistent-dense-mapping-with-geometric-priors.pdf'],
    ['AgentGrounder: Zero-Shot 3D Visual Pointcloud Grounding using Multimodal Language Models', 'assets/papers/submission-27-agentgrounder-zero-shot-3d-visual-pointcloud-grounding-using-multimodal-language-models.pdf'],
    ['Generalizing Visual Proprioception for Multiple Robot Configurations', 'assets/papers/submission-28-generalizing-visual-proprioception-for-multiple-robot-configurations.pdf'],
    ['Light Field Based 6DoF Tracking of Previously Unobserved Objects', 'assets/papers/submission-29-light-field-based-6dof-tracking-of-previously-unobserved-objects.pdf'],
    ['Learning to Localize Reference Trajectories in Image-Space for Visual Navigation', 'assets/papers/submission-32-learning-to-localize-reference-trajectories-in-image-space-for-visual-navigation.pdf'],
    ['Domain Shift-Aware Training-Free Adaptation for Open-Vocabulary Segmentation in Robotic Perception', 'assets/papers/submission-34-domain-shift-aware-training-free-adaptation-for-open-vocabulary-segmentation-in-robotic-pe.pdf'],
    ['ScanNet-SG: A Large-Scale Dataset for 3D Scene Graph Alignment', 'assets/papers/submission-36-scannet-sg-a-large-scale-dataset-for-3d-scene-graph-alignment.pdf'],
    ['Object-Level Change Detection via Semantic Correspondences Association in Multi-Session Mapping', 'assets/papers/submission-39-object-level-change-detection-via-semantic-correspondences-association-in-multi-session-ma.pdf'],
    ['UniFField: A Generalizable Unified Neural Feature Field for Visual, Semantic, and Spatial Uncertainties in Any Scene', ''],
    ['Metric-Semantic Primitive Matching for Cross-View Robot Localization Beyond Urban Environments', 'assets/papers/submission-44-metric-semantic-primitive-matching-for-cross-view-robot-localization-beyond-urban-environm.pdf'],
  ],
}

// [image path, caption]
const gallery_photos = [
  ['assets/images/gallery/01-opening-session.jpeg', 'Opening of the MM-SpatialAI Workshop'],
  ['assets/images/gallery/02-welcome-remarks-xingxing-zuo.jpeg', 'Welcome remarks by Xingxing Zuo'],
  ['assets/images/gallery/03-keynote-andrew-davison.jpg', 'Keynote: Andrew Davison'],
  ['assets/images/gallery/04-keynote-dezhen-song.jpeg', 'Keynote: Dezhen Song'],
  ['assets/images/gallery/05-keynote-margarita-chli.jpeg', 'Keynote: Margarita Chli'],
  ['assets/images/gallery/06-keynote-alex-wong.jpeg', 'Keynote: Alex Wong'],
  ['assets/images/gallery/07-keynote-hermann-blum.jpeg', 'Keynote: Hermann Blum'],
  ['assets/images/gallery/08-keynote-timothy-barfoot.jpg', 'Keynote: Timothy D. Barfoot'],
  ['assets/images/gallery/09-keynote-sebastian-scherer.jpeg', 'Keynote: Sebastian Scherer'],
  ['assets/images/gallery/10-panel-discussion.jpeg', 'Panel Discussion'],
  ['assets/images/gallery/11-best-paper-finalist.jpeg', 'Best Paper Award Finalist'],
  ['assets/images/gallery/12-best-paper-award.jpeg', 'Best Paper Award'],
  ['assets/images/gallery/13-closing-remarks.jpeg', 'Closing remarks by Guoquan Huang'],
  ['assets/images/gallery/14-group-photo.jpeg', 'Organizers & Speakers'],
]

const sponsor_introductions = [
  ['Sponsors', '15:10 - 15:15', 'Nokov'],
  ['Sponsors', '15:15 - 15:20', 'AgileX'],
  ['Sponsors', '15:20 - 15:25', 'DeepMirror'],
  ['Sponsors', '15:25 - 15:30', 'ATEC'],
]


// Full workshop recording. Per-session chapter links are built as
// `${workshop_recording}&t=${seconds}s`. Keys: 'intro' for the opening,
// otherwise the inv-talk speaker alias. Only sessions present in the video are listed.
const workshop_recording = 'https://www.youtube.com/watch?v=3W7J-gDwJ8A'
const recording_timestamps = {
  'intro': 0,       // 00:00:00 Opening
  'ad': 435,        // 00:07:15 Andrew Davison
  'ds': 2425,       // 00:40:25 Dezhen Song
  'mc': 4302,       // 01:11:42 Margarita Chli
  'hb': 6161,       // 01:42:41 Hermann Blum
  'aw': 8122,       // 02:15:22 Alex Wong
  'tm': 9744,       // 02:42:24 Timothy D. Barfoot
  'sc': 11372,      // 03:09:32 Sebastian Scherer
}

// event-alias, time slot, event name, detail alias, ppt mode
// last two are for inv-talk event-alias entries
const schedule = [
  ['intro', '09:00 - 09:10', 'Welcome & Introduction'],
  ['inv-talk', '09:10 - 09:40', 'Invited Talk', 'ad', 'in-person'],
  ['inv-talk', '09:40 - 10:10', 'Invited Talk', 'ds', 'in-person'],
  ['spot-ppt', '10:10 - 10:30', 'Contributed Paper Session & Oral Talks 1', 'spot-ppt-1'],
  ['coffee-break', '10:30 - 11:00', 'Morning Coffee & <span class="bold has-text-info">Poster Session</span>', 'coffee-poster-morning'],
  ['inv-talk', '11:00 - 11:30', 'Invited Talk', 'mc', 'in-person'],
  ['inv-talk', '11:30 - 12:00', 'Invited Talk', 'aw', 'in-person'],
  ['inv-talk', '12:00 - 12:30', 'Invited Talk', 'hb', 'in-person'],
  ['lunch-break', '12:30 - 14:00', 'Lunch Break'],
  ['inv-talk', '14:00 - 14:30', 'Invited Talk', 'tm', 'in-person'],
  ['spot-ppt', '14:30 - 15:10', 'Contributed Paper Session & Oral Talks 2', 'spot-ppt-2'],
  ['sponsors', '15:10 - 15:30', 'Sponsor Introductions (4 x 5 mins)', 'sponsor-introductions'],
  ['coffee-break', '15:30 - 16:00', 'Afternoon Coffee & <span class="bold has-text-info">Poster Session</span>', 'coffee-poster-afternoon'],
  ['inv-talk', '16:00 - 16:30', 'Invited Talk', 'sc', 'in-person'],
  ['panel', '16:30 - 17:00', 'Panel Discussion'],
  ['award', '17:00 - 17:20', 'Award Ceremony'],
  ['disc', '17:20 - 17:30', 'Conclusions & Closing Remarks'],
]
