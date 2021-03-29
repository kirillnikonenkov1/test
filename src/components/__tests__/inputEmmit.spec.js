import CustomInput from '@/components/ui/CInput'
import searchGitUser from "@/components/searchGitUser";
import { mount } from '@vue/test-utils'

test('Тест компонента поиска пользователей', () => {
        const $route = {
            name: 'search',
            params: {query: 'asd'},
            query: {page: '1'}
        }
        const $router = {
            push: jest.fn()
        }
        const wrapper = mount(searchGitUser, {
            mocks: {
                $route,
                $router
            },
            stubs: {
                'c-input': CustomInput,
                'c-button': true
            }
        })

        wrapper.find('input').trigger('keypress', {
            key: 'enter'
        })

        expect(wrapper.emitted()).toBeTruthy()
})
