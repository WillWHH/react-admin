import React, { Component } from 'react'
import Highlighter from 'react-highlight-words'
import { Icon, Table, Input, Button, Tag } from 'antd'
import { HF_device } from './data'

class HF_dev extends Component {
    state = {
        data: [],
        searchText: '',
        searchedColumn: ''
    }
    componentDidMount() {
        this.setState({
            data: HF_device
        })
    }
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node
                    }}
                    placeholder={`查找 ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type='primary'
                    onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    icon='search'
                    size='small'
                    style={{ width: 90, marginRight: 8 }}>
                    查找
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size='small' style={{ width: 90 }}>
                    重置
                </Button>
            </div>
        ),
        filterIcon: filtered => <Icon type='search' style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select())
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
            ) : (
                text
            )
    })

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex
        })
    }

    handleReset = clearFilters => {
        clearFilters()
        this.setState({ searchText: '' })
    }

    render() {
        const columns = [
            {
                align: 'center',
                title: '设备ID',
                dataIndex: 'id',
                key: 'id',
                width: '10%',
                sorter: (a, b) => a.id - b.id,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('id')
            },
            {
                align: 'center',
                title: '链路类型',
                dataIndex: 'type',
                key: 'type',
                width: '15%',
                sorter: (a, b) => a.type - b.type,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('type')
            },
            {
                align: 'center',
                title: '传播速率',
                dataIndex: 'rate',
                key: 'rate',
                width: '15%',
                sorter: (a, b) => a.rate - b.rate,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('rate')
            },
            {
                align: 'center',
                title: '传播波形',
                dataIndex: 'waveform',
                key: 'waveform',
                width: '15%',
                sorter: (a, b) => a.waveform - b.waveform,
                sortDirections: ['descend', 'ascend'],
                ...this.getColumnSearchProps('waveform')
            },
            {
                align: 'center',
                title: '当前状态',
                dataIndex: 'state',
                key: 'state',
                width: '5%',
                sorter: (a, b) => a.state - b.state,
                sortDirections: ['descend', 'ascend'],
                render: state => (
                    <span>
                        <Tag color={state ? 'red' : 'green'} key={state}>
                            {state ? '不连接' : '连接'}
                        </Tag>
                    </span>
                )
            }
        ]
        return <Table columns={columns} dataSource={this.state.data} />
    }
}
export default HF_dev
