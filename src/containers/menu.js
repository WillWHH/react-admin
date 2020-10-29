const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home'
    },
    {
        title: '一、业务感知',
        key: '/awareness',
        icon: 'appstore'
    },
    {
        title: '二、虚拟化资源池',
        key: '/resource',
        icon: 'bulb',
        subs: [
            {
                title: '1、物理资源',
                key: '/resource/physical',
                icon: '',
                subs: [
                    { title: '1.1 超短波设备', key: '/resource/physical/VHF_dev', icon: '' },
                    { title: '1.2 短波设备', key: '/resource/physical/HF_dev', icon: '' },
                    { title: '1.3 LTE设备', key: '/resource/physical/LTE_dev', icon: '' },
                    { title: '1.4 交换机设备', key: '/resource/physical/switch_dev', icon: '' },
                    { title: '1.5 控制设备', key: '/resource/physical/control_dev', icon: '' },
                    { title: '1.6 用户终端设备', key: '/resource/physical/terminal_dev', icon: '' },
                    { title: '1.7 网络拓扑资源', key: '/resource/physical/network_top', icon: '' }
                ]
            },
            {
                title: '2、逻辑资源',
                key: '/resource/logical',
                icon: '',
                subs: [
                    { title: '2.1 IP码号资源', key: '/resource/logical/ip_res', icon: '' },
                    { title: '2.2 用户号资源', key: '/resource/logical/uid_res', icon: '' }
                ]
            },

            {
                title: '3、频率资源',
                key: '/resource/frequency',
                icon: '',
                subs: [
                    { title: '3.1 超短波频率', key: '/resource/frequency/VHF_fre', icon: '' },
                    { title: '3.2 短波频率', key: '/resource/frequency/HF_fre', icon: '' },
                    { title: '3.3 4GLTE频率', key: '/resource/frequency/LTE_fre', icon: '' }
                ]
            }
        ]
    },
    {
        title: '三、资源编排',
        key: '/orchestration',
        icon: 'form'
    },
    {
        title: '四、状态监测',
        key: '/monitor',
        icon: 'pie-chart'
    },
    {
        title: '五、南向接口',
        key: '/s_interface',
        icon: 'paper-clip',
        subs: [
            { title: '1、VHF网', key: '/s_interface/VHF_net', icon: '' },
            { title: '2、HF网', key: '/s_interface/HF_net', icon: '' },
            { title: '3、LTE网', key: '/s_interface/LTE_net', icon: '' }
        ]
    },
    {
        title: '六、北向接口',
        key: '/n_interface',
        icon: 'bars',
        subs: [{ title: '1、上级管控', key: '/n_interface/control', icon: '' }]
    }
]

export default menu
