const project_name = `Multi-Modal Spatial AI for Robust Navigation and Open-World Understanding `
const proj_small_caps = `<span class="small-caps">MM-SpatialAI Workshop</span>: `
const conference_details = ['ICRA 2026', 'https://2026.ieee-icra.org/', 'Vienna, Austria', 'assets/images/icra26_logo.png']
const workshop_date = `June 1, 2026`

const talk_speaker_details = {
  'aw': ['Alex Wong', './assets/images/talks/alex-wong.jpg', 'Assistant Professor', 'Yale University', 'https://vision.cs.yale.edu/members/alex-wong/', 'TBD', ''],
  'hb': ['Hermann Blum', './assets/images/talks/hermann_blum.webp', 'Junior Professor', 'University of Bonn', 'https://hermannblum.net/', 'TBD', ''],
  'ds': ['Dezhen Song', './assets/images/talks/Dezhen-Song.jpg', 'Professor', 'MBZUAI', 'https://mbzuai.ac.ae/study/faculty/dezhen-song/', 'TBD', ''],
  'tm': ['Timothy D. Barfoot', './assets/images/talks/Tim Barfoot.jpeg', 'Professor', 'University of Toronto', 'https://discover.research.utoronto.ca/17296-tim-barfoot', 'TBD', ''],
  'mc': ['Margarita Chli', './assets/images/talks/MargaritaChli.png', 'Professor', 'ETH Zurich & University of Cyprus', 'https://margaritachli.com/blog/dr-chli-margarita/the-lab', 'TBD', ''],
  'sc': ['Sebastian Scherer', './assets/images/talks/Sebastian-Scherer.jpg', 'Associate Research Professor', 'CMU', 'https://www.ri.cmu.edu/ri-faculty/sebastian-scherer/', 'TBD', ''],
  'ad': ['Andrew Davison', './assets/images/talks/AndrewDavison.jpg', 'Professor', 'Imperial College London', 'https://www.doc.ic.ac.uk/~ajd/', 'TBD', ''],
  'tbd1': ['TBD', './assets/images/talks/TBD', 'TBD', 'TBD', 'TBD', 'TBD', ''],
  'tbd2': ['TBD', './assets/images/talks/Sebastian-Scherer.jpg', 'Associate Research Professor', 'Carnegie Mellon University', 'https://theairlab.org/team/sebastian/', 'TBD', ''],
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

const accepted_presentations = [
  ['Jad Abou-Chakra', 'https://au.linkedin.com/in/jadchakra', 'assets/images/ppt-talks/Jad-Abou-Chakra.jpeg', 'PhD Student', 'Queensland University of Technology', 'Physically Embodied Gaussian Splatting: Embedding Physical Priors into a Visual 3D World Model For Robotics', 'Predictive modelling is vital for robotic manipulation, assisting an agent to plan actions to achieve its goals. Many studies have leaned on visual representations like 2d images or 3d neural radiance fields for state representation. However, they often lack the ability to effectively represent and reason over physical phenomena such as gravity, forces, velocities, collisions, or rigidity, limiting interpretability and prediction stability over longer time horizons. We enhance the state representation by combining visual data with explicit physical, structural, and kinematic priors. We forge a connection between a particle-based physics simulator and a visual scene representation that harnesses Gaussian Splatting. Our core innovation is a dual Gaussian-Particle model that facilitates the synthesis of real-world data into a simulation, enabling differentiable parameter updates and integration with a model predictive control pipeline.', 'Spotlight', '9:30 - 9:40'],
  ['Xingyu Lin', 'https://xingyu-lin.github.io/', 'assets/images/ppt-talks/Xingyu-Lin.png', 'PostDoc', 'University of California, Berkeley', 'Learning Generalizable Visuomotor Skills from Pre-trained Networks', 'The existing internet-scale image and video datasets cover a wide range of everyday objects and tasks, bringing the potential of learning policies that generalize in diverse scenarios. Prior works have explored visual pre-training with different self-supervised objectives. Still, the generalization capabilities of the learned policies and the advantages over well-tuned baselines remain unclear from prior studies. In this work, we present a focused study of the generalization capabilities of the pre-trained visual representations at the categorical level. We identify the key bottleneck in using a frozen pre-trained visual backbone for policy learning and then propose SpawnNet, a novel two-stream architecture that learns to fuse pre-trained multi-layer representations into a separate network to learn a robust policy. Through extensive simulated and real experiments, we show significantly better categorical generalization compared to prior approaches in imitation learning settings.', 'Spotlight', '9:40 - 9:50'],
  ['Yixuan Huang', 'https://robot-learning.cs.utah.edu/yixuanh', 'assets/images/ppt-talks/Yixuan-Huang.png', 'PhD Student', 'University of Utah', 'Reasoning and Planning about Unobserved Objects with Memory Models', 'Robots need to have a memory of previously observed, but currently occluded objects to work reliably in realistic environments. We investigate the problem of encoding object-oriented memory into a multi-object manipulation reasoning and planning framework. We propose DOOM and LOOM, which leverage transformer relational dynamics to encode the history of trajectories given partial-view point clouds and an object discovery and tracking engine. Our approaches can perform multiple challenging tasks including reasoning with occluded objects, novel objects appearance, and object reappearance. Throughout our extensive simulation and real-world experiments, we find that our approaches perform well in terms of different numbers of objects and different numbers of distractor actions.', 'Spotlight', '9:50 - 10:00'],
  ['Carolina Higuera', 'https://carolinahiguera.github.io/', 'assets/images/ppt-talks/Carolina-Higuera.png', 'PhD Student', 'University of Washington', 'Perceiving Extrinsic Contacts from Touch Improves Learning Insertion Policies', 'Robotic manipulation tasks such as object insertion typically involve interactions between object and environment, namely extrinsic contacts. Prior work on Neural Contact Fields (NCF) use intrinsic tactile sensing between gripper and object to estimate extrinsic contacts in simulation. However, its effectiveness and utility in real-world tasks remain unknown. In this work, we improve NCF to enable sim-to-real transfer and use it to train policies for mug-in-cupholder and bowl-in-dishrack insertion tasks. We find our model NCF-v2, is capable of estimating extrinsic contacts in the real-world. Furthermore, our insertion policy with NCF-v2 outperforms policies without it, achieving 33% higher success and 1.36x faster execution on mug-in-cupholder, and 13% higher success and 1.27x faster execution on bowl-in-dishrack.', 'Spotlight', '10:00 - 10:10'],
  ['Kushal Kedia', 'https://kushal2000.github.io/', 'assets/images/ppt-talks/Kushal-Kedia.png', 'PhD Student', 'Cornell University', 'What will the Human and Robot Do? Modeling Human Intent for Collaborative Manipulation', "In collaborative human-robot manipulation, a robot must predict human intents and adapt its actions accordingly to smoothly execute tasks. However, the human's intent, in turn, depends on the actions the robot takes, creating a chicken-or-egg problem. Prior methods ignore such inter-dependency and train marginal intent prediction models independent of robot actions. This is because training conditional models is hard given a lack of paired human-robot interaction datasets. Can we instead leverage large-scale human-human interaction data that is more easily accessible? Our key insight is to exploit a correspondence between human and robot actions that enables transfer learning from human-human to human-robot data. We propose a novel architecture, InteRACT, that pre-trains a conditional intent prediction model on large human-human datasets and fine-tunes on a small human-robot dataset. We evaluate our intent predictor on a set of real-world collaborative human-robot manipulation tasks and show that our conditional model improves over various marginal baselines. We also introduce new techniques to tele-operate a 7-DoF robot arm and collect a diverse range of human-robot collaborative manipulation data.", 'Spotlight', '10:10 - 10:20'],
  ['Stanley Lewis', 'https://www.linkedin.com/in/stanlew7531', 'assets/images/ppt-talks/Stanley-Lewis.jpg', 'PhD Student', 'University of Michigan', "Inverting the Design of Everyday Things: Affordances, Signifiers and Why Objects Should See and Robots Should Do", "Roboticists have long aspired to create robots capable of autonomously executing manipulation tasks using natural language instructions. However, integrating language into physical tasks remains a challenging research area. We propose a new conceptualization of this problem, akin to inverting the industrial design problem as explored by Don Norman. Humans rely on object signifiers, communicated via an object’s geometry or texture, to effectively map their actions to affordances. For instance, a horizontal crash bar on a door signal where to push. These inherent object signifiers suggest that manipulation should primarily depend on object appearance and observed object-object interactions. By conditioning manipulations on neural radiance field representations of relevant objects in the scene, we can subsequently establish object-centric way fields for desired object motion in a given task. This approach allows for a separation between the challenging language-driven task and the more well-understood motion-planning problem.", 'Spotlight', '10:20 - 10:30'],
  ['Sudeep Dasari', 'https://sudeepdasari.github.io/', 'assets/images/ppt-talks/Sudeep-Dasari.png', 'PhD Student', 'Carnegie Mellon University', 'An Unbiased Look at Datasets for Visuo-Motor Pre-Training', 'Dense visual correspondence plays a vital role in robotic perception. This work focuses on establishing the dense correspondence between a pair of images that captures dynamic scenes undergoing substantial transformations. We introduce Doduo to learn general dense visual correspondence from in-the-wild images and videos without ground truth supervision. Given a pair of images, it estimates the dense flow field encoding the displacement of each pixel in one image to its corresponding pixel in the other image. Doduo uses flow-based warping to acquire supervisory signals for the training. Incorporating semantic priors with self-supervised flow training, Doduo produces accurate dense correspondence robust to the dynamic changes of the scenes. Trained on an in-the-wild video dataset, Doduo illustrates superior performance on point-level correspondence estimation over existing self-supervised correspondence learning baselines. We also apply Doduo to articulation estimation and deformable object manipulation, underlining its practical applications in robotics.', 'Spotlight', '14:30 - 14:40'],
  ['Shuo Cheng', 'https://sites.google.com/view/shuocheng', 'assets/images/ppt-talks/Shuo-Cheng.jpg', 'PhD Student', 'Georgia Institute of Technology', 'Scalable and Generalizable Robot Skill Representations for Long-horizon Manipulation', 'Unlocking the potential of robots in everyday environments presents numerous applications. However, daily tasks are characterized by long horizons, diverse geometries, and configurations, posing challenges for scalability and generalizability in existing paradigms. This presentation explores novel representations and systems for scalable, generalizable skill acquisition and coordination, enabling robots to tackle complex, long-term tasks effectively and robustly.', 'Spotlight', '14:40 - 14:50'],
  ['Ankit Goyal', 'https://imankgoyal.github.io/', 'assets/images/ppt-talks/Ankit-Goyal.png', 'Research Scientist', 'NVIDIA', 'RVT: Robotic View Transformer for 3D Object Manipulation', 'For 3D object manipulation, methods that build an explicit 3D representation perform better than those relying only on camera images. But using explicit 3D representations like voxels comes at large computing cost, adversely affecting scalability. Ee propose RVT, a multi-view transformer for 3D manipulation that is both scalable and accurate. Some key features of RVT are an attention mechanism to aggregate information across views and re-rendering of the camera input from virtual views around the robot workspace. In simulations, we find that a single RVT model works well across 18 RLBench tasks with 249 task variations, achieving 26% higher relative success than the existing state-of-the-art method (PerAct). It also trains 36X faster than PerAct for achieving the same performance and achieves 2.3X the inference speed of PerAct. Further, RVT can perform a variety of manipulation tasks in the real world with just a few (∼10) demonstrations per task.', 'Spotlight', '14:50 - 15:00'],
  ['Zhenyu Jiang', 'https://zhenyujiang.me/', 'assets/images/ppt-talks/Zhenyu-Jiang.jpg', 'PhD Student', 'The University of Texas at Austin', 'Doduo: Dense Visual Correspondence from Unsupervised Semantic-Aware Flow', 'Dense visual correspondence plays a vital role in robotic perception. This work focuses on establishing the dense correspondence between a pair of images that captures dynamic scenes undergoing substantial transformations. We introduce Doduo to learn general dense visual correspondence from in-the-wild images and videos without ground truth supervision. Given a pair of images, it estimates the dense flow field encoding the displacement of each pixel in one image to its corresponding pixel in the other image. Doduo uses flow-based warping to acquire supervisory signals for the training. Incorporating semantic priors with self-supervised flow training, Doduo produces accurate dense correspondence robust to the dynamic changes of the scenes. Trained on an in-the-wild video dataset, Doduo illustrates superior performance on point-level correspondence estimation over existing self-supervised correspondence learning baselines. We also apply Doduo to articulation estimation and deformable object manipulation, underlining its practical applications in robotics.', 'Spotlight', '15:00 - 15:10'],
  ['Leon Kim', 'https://www.grasp.upenn.edu/people/leon-kim/', 'assets/images/ppt-talks/Leon-Kim.jpg', 'PhD Student', 'University of Pennsylvania', 'Vision-Based Contact Localization Without Touch or Force Sensing', 'Contacts play a critical role in most manipulation tasks. Robots today mainly use proximal touch/force sensors to sense contacts, but the information they provide must be calibrated and is inherently local, with practical applications relying either on extensive surface coverage or restrictive assumptions to resolve ambiguities. We propose a vision-based extrinsic contact localization task: with only a single RGB-D camera view of a robot workspace, identify when and where an object held by the robot contacts the rest of the environment. We show that careful task-attuned design is critical for a neural network trained in simulation to discover solutions that transfer well to a real robot. Our final approach im2contact demonstrates the promise of versatile general-purpose contact perception from vision alone, performing well for localizing various contact types (point, line, or planar; sticking, sliding, or rolling; single or multiple), and even under occlusions in its camera view. ', 'Spotlight', '15:10 - 15:20'],
  // ['Shangjie Xue', '#', 'https://bulma.io/images/placeholders/128x128.png', 'PhD Student', 'Georgia Institute of Technology', 'Neural Field Dynamics Model for Granular Object Piles Manipulation', 'We present a learning-based dynamics model for granular material manipulation. Inspired by the Eulerian approach commonly used in fluid dynamics, our method adopts a fully convolutional neural network that operates on a density field-based representation of object piles and pushers, allowing it to exploit the spatial locality of inter-object interactions as well as the translation equivariance through convolution operations. Furthermore, our differentiable action rendering module makes the model fully differentiable and can be directly integrated with a gradient-based trajectory optimization algorithm. We evaluate our model with a wide array of piles manipulation tasks both in simulation and real-world experiments and demonstrate that it significantly exceeds existing latent or particle-based methods in both accuracy and computation efficiency, and exhibits zero-shot generalization capabilities across various environments and tasks.', 'Spotlight' , '15:20 - 15:30'], // poster, hence ''
  // ["FullName-1", "#", "", "Designation", "Affiliation", "Presentation Title", "Spotlight"],
  // ["FullName-2", "#", "", "Designation", "Affiliation", "Presentation Title", ""],
]

const org_affiliation_logos = [
  'assets/images/affiliation-logos/um-logo.png',
  'assets/images/affiliation-logos/utd-logo.png',
]


const contributed_paper_sessions = {
  'spot-ppt-1': [
    ['10:10 - 10:15', 'LAPS: Improving Incremental LiDAR Mapping using Active Pooling and Sampling for Neural Distance Fields', 'https://openreview.net/forum?id=4Gsum6lGKy'],
    ['10:15 - 10:20', 'FlowHOI: Flow-based Semantics-Grounded Generation of Hand-Object Interactions for Dexterous Robot Manipulation', 'https://openreview.net/forum?id=1ZT1RAUORQ'],
    ['10:20 - 10:25', 'Memory Over Maps: 3D Object Localization Without Reconstruction', 'https://openreview.net/forum?id=BywzZunfTz'],
    ['10:25 - 10:30', 'Online Adaptive Learning for Robust LiDAR Perception in High-Performance Autonomous Racing', 'https://openreview.net/forum?id=Fn9g3znAy8'],
  ],
  'spot-ppt-2': [
    ['14:30 - 14:35', 'Exploring Bottlenecks in VLM-LLM Navigation: How 3D Scene Understanding Capability Impacts Zero-Shot VLN', 'https://openreview.net/forum?id=x8pDjdRfFs'],
    ['14:35 - 14:40', 'Efficient Feature-Free Initialization for Monocular Visual-Inertial Systems Using A Feed-Forward 3D Model', 'https://openreview.net/forum?id=efkfNOm4Lx'],
    ['14:40 - 14:45', 'DCReg: Decoupled Characterization for Efficient Degenerate LiDAR Registration', 'https://openreview.net/forum?id=GcmvDNi6Xa'],
    ['14:45 - 14:50', 'RADIO-ViPE: Online Tightly Coupled Multi-Modal Fusion for Open-Vocabulary Semantic SLAM in Dynamic Environments', 'https://openreview.net/forum?id=kCsobjEkl7'],
    ['14:50 - 14:55', 'VLA-RAIL: A Real-Time Asynchronous Inference Linker for VLA Models and Robots', 'https://openreview.net/forum?id=v8l38pjA5n'],
    ['14:55 - 15:00', '4D Latent Mapping for Mobile Manipulation Policy Learning', 'https://openreview.net/forum?id=ygM2oi5zDO'],
    ['15:00 - 15:05', 'FunFact: Building Probabilistic Functional 3D Scene Graphs via Factor-Graph Reasoning', 'https://openreview.net/forum?id=5LlAmwtJeB'],
    ['15:05 - 15:10', 'Pose-Anchored and Scale-Consistent Dense Mapping with Geometric Priors', 'https://openreview.net/forum?id=TDz3PNI1Le'],
  ],
}


const coffee_poster_sessions = {
  'coffee-poster-morning': [
    'LAPS: Improving Incremental LiDAR Mapping using Active Pooling and Sampling for Neural Distance Fields',
    'FlowHOI: Flow-based Semantics-Grounded Generation of Hand-Object Interactions for Dexterous Robot Manipulation',
    'Memory Over Maps: 3D Object Localization Without Reconstruction',
    'Online Adaptive Learning for Robust LiDAR Perception in High-Performance Autonomous Racing',
    'EgoSpot: Egocentric Multimodal Control for Hands-Free Mobile Manipulation',
    'Spatial-JEPA: Geometry-Aware Self-Supervised Learning from RGBD via Cross-Attention Fusion',
    'Unpaired RGB-Thermal Gaussian-Splatting Using Visual Geometric Transformers',
    'Sign Language: Towards Sign Understanding for Robot Autonomy',
    'Image-based Geo-localization for Robotics: Are Black-box Vision-Language Models there yet?',
    'VANG-Planner: Integrating Language Instructions into Spatial Cost for Global Path Planning',
    'Compact Multi-Agent Gaussian Splatting SLAM',
    'Caging Vision-Language Navigation for Legged Robots',
    'Two-Stage Hint–Object Alignment for Text-to-PointCloud Localization',
    'Towards Lifelong Outdoor Magnetic-Aware SLAM: A Multi-Modal Day-and-Night Geomagnetic Dataset',
    'From Obstacles to Etiquette: Robot Social Navigation with VLM-Informed Path Selection',
    'MR-SLAM: Immersive Spatial Supervision for Multi-Robot Mapping via Mixed Reality',
    'Mind the Domain Gap: Multi-Modal Fusion for Off-road Navigation and Scene Understanding',
  ],
  'coffee-poster-afternoon': [
    'Exploring Bottlenecks in VLM-LLM Navigation: How 3D Scene Understanding Capability Impacts Zero-Shot VLN',
    'Efficient Feature-Free Initialization for Monocular Visual-Inertial Systems Using A Feed-Forward 3D Model',
    'DCReg: Decoupled Characterization for Efficient Degenerate LiDAR Registration',
    'RADIO-ViPE: Online Tightly Coupled Multi-Modal Fusion for Open-Vocabulary Semantic SLAM in Dynamic Environments',
    'VLA-RAIL: A Real-Time Asynchronous Inference Linker for VLA Models and Robots',
    '4D Latent Mapping for Mobile Manipulation Policy Learning',
    'FunFact: Building Probabilistic Functional 3D Scene Graphs via Factor-Graph Reasoning',
    'Pose-Anchored and Scale-Consistent Dense Mapping with Geometric Priors',
    'AgentGrounder: Zero-Shot 3D Visual Pointcloud Grounding using Multimodal Language Models',
    'Generalizing Visual Proprioception for Multiple Robot Configurations',
    'Light Field Based 6DoF Tracking of Previously Unobserved Objects',
    'Learning to Localize Reference Trajectories in Image-Space for Visual Navigation',
    'Domain Shift-Aware Training-Free Adaptation for Open-Vocabulary Segmentation in Robotic Perception',
    'ScanNet-SG: A Large-Scale Dataset for 3D Scene Graph Alignment',
    'Object-Level Change Detection via Semantic Correspondences Association in Multi-Session Mapping',
    'UniFField: A Generalizable Unified Neural Feature Field for Visual, Semantic, and Spatial Uncertainties in Any Scene',
    'Metric-Semantic Primitive Matching for Cross-View Robot Localization Beyond Urban Environments',
  ],
}


// event-alias, time slot, event name, detail alias, ppt mode
// last two are for inv-talk event-alias entries
const schedule = [
  ['intro', '09:00 - 09:10', 'Welcome & Introduction'],
  ['inv-talk', '09:10 - 09:40', 'Invited Talk', 'hb', 'in-person'],
  ['inv-talk', '09:40 - 10:10', 'Invited Talk', 'tbd2', 'in-person'],
  ['spot-ppt', '10:10 - 10:30', 'Contributed Paper Session & Poster Lightning Talks 1', 'spot-ppt-1'],
  ['coffee-break', '10:30 - 11:00', 'Morning Coffee & <span class="bold has-text-info">Poster Session</span>', 'coffee-poster-morning'],
  ['inv-talk', '11:00 - 11:30', 'Invited Talk', 'ds', 'in-person'],
  ['inv-talk', '11:30 - 12:00', 'Invited Talk', 'tbd1', 'in-person'],
  ['inv-talk', '12:00 - 12:30', 'Invited Talk', 'aw', 'in-person'],
  ['lunch-break', '12:30 - 14:00', 'Lunch Break'],
  ['inv-talk', '14:00 - 14:30', 'Invited Talk', 'tm', 'in-person'],
  ['spot-ppt', '14:30 - 15:10', 'Contributed Paper Session & Poster Lightning Talks 2', 'spot-ppt-2'],
  ['sponsors', '15:10 - 15:30', 'Sponsors & TABxStartups Introductions (6 x ~3 mins)'],
  ['coffee-break', '15:30 - 16:00', 'Afternoon Coffee & <span class="bold has-text-info">Poster Session</span>', 'coffee-poster-afternoon'],
  ['inv-talk', '16:00 - 16:30', 'Invited Talk', 'aw', 'in-person'],
  ['panel', '16:30 - 17:00', 'Panel Discussion'],
  ['award', '17:00 - 17:20', 'Award Ceremony'],
  ['disc', '17:20 - 17:30', 'Conclusions & Closing Remarks'],
]
