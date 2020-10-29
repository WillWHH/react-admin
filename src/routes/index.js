import loadable from '@/utils/loadable'

const Index = loadable(() => import('@/views/Index'))

// 一、业务感知
const Awareness = loadable(() => import('@/views/Awareness'))

// 二、虚拟化资源池
//const Physical = loadable(() => import('@/views/Resources/Physical'))
const VHF_dev = loadable(() => import('@/views/Resources/Physical/VHF_dev'))
const HF_dev = loadable(() => import('@/views/Resources/Physical/HF_dev'))
const LTE_dev = loadable(() => import('@/views/Resources/Physical/LTE_dev'))
const switch_dev = loadable(() => import('@/views/Resources/Physical/switch_dev'))
const control_dev = loadable(() => import('@/views/Resources/Physical/control_dev'))
const terminal_dev = loadable(() => import('@/views/Resources/Physical/terminal_dev'))
const network_top = loadable(() => import('@/views/Resources/Physical/network_top'))

//const Logical = loadable(() => import('@/views/Resources/Logical'))
const ip_res = loadable(() => import('@/views/Resources/Logical/ip_res'))
const uid_res = loadable(() => import('@/views/Resources/Logical/uid_res'))

//const Frequency = loadable(() => import('@/views/Resources/Frequency'))
const VHF_fre = loadable(() => import('@/views/Resources/Frequency/VHF_fre'))
const HF_fre = loadable(() => import('@/views/Resources/Frequency/HF_fre'))
const LTE_fre = loadable(() => import('@/views/Resources/Frequency/LTE_fre'))

// 三、资源编排
const Orchestration = loadable(() => import('@/views/Orchestration'))

// 四、状态监测
const Monitor = loadable(() => import('@/views/Monitor'))

// 五、南向接口
const VHF_net = loadable(() => import('@/views/S_interface/VHF_net'))
const LTE_net = loadable(() => import('@/views/S_interface/LTE_net'))
const HF_net = loadable(() => import('@/views/S_interface/HF_net'))

//六、北向接口
const Control = loadable(() => import('@/views/N_interface/Control'))

const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index },

    { path: '/awareness', exact: false, name: '业务感知', component: Awareness },

    //{ path: '/resource/physical', exact: false, name: '物理资源', component: Physical },
    { path: '/resource/physical/VHF_dev', exact: false, name: '超短波设备', component: VHF_dev },
    { path: '/resource/physical/HF_dev', exact: false, name: '短波设备', component: HF_dev },
    { path: '/resource/physical/LTE_dev', exact: false, name: 'LTE设备', component: LTE_dev },
    { path: '/resource/physical/switch_dev', exact: false, name: '交换机设备', component: switch_dev },
    { path: '/resource/physical/control_dev', exact: false, name: '控制设备', component: control_dev },
    { path: '/resource/physical/terminal_dev', exact: false, name: '用户终端设备', component: terminal_dev },
    { path: '/resource/physical/network_top', exact: false, name: '网络拓扑资源', component: network_top },

    //{ path: '/resource/logical', exact: false, name: '逻辑资源', component: Logical },
    { path: '/resource/logical/ip_res', exact: false, name: 'IP码号资源', component: ip_res },
    { path: '/resource/logical/uid_res', exact: false, name: '用户号资源', component: uid_res },

    //{ path: '/resource/frequency', exact: false, name: '频率资源', component: Frequency },
    { path: '/resource/frequency/VHF_fre', exact: false, name: '超短波频率', component: VHF_fre },
    { path: '/resource/frequency/HF_fre', exact: false, name: '短波频率', component: HF_fre },
    { path: '/resource/frequency/LTE_fre', exact: false, name: '4GLTE频率', component: LTE_fre },

    { path: '/orchestration', exact: false, name: '资源编排', component: Orchestration },

    { path: '/monitor', exact: false, name: '状态监测', component: Monitor },

    { path: '/s_interface/VHF_net', exact: false, name: 'VHF网', component: VHF_net },
    { path: '/s_interface/LTE_net', exact: false, name: 'LTE网', component: LTE_net },
    { path: '/s_interface/HF_net', exact: false, name: 'HF网', component: HF_net },

    { path: '/n_interface/control', exact: false, name: '上级管控', component: Control }
]

export default routes
