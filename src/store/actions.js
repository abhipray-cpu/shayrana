import { supabase } from '../supabase'
import Cookies from 'js-cookie'
export default {
  async signup(context, payload) {
    try {
      const userData = {
        name: payload.name,
        email: payload.email,
        password: payload.password,
        dp: payload.dp
      }

      const data = await supabase.from('users').insert([userData])
      if (data.error) {
        return { result: '', error: data.error.message }
      }
      return { result: '1', error: '' }
    } catch (err) {
      return { result: '', error: err.message }
    }
  },
  async login(context, payload) {
    try {
      let { data, err } = await supabase
        .from('users')
        .select('*')
        .eq('email', payload.email)
        .eq('password', payload.password)
      if (err || data.length == 0) {
        return { result: '', error: err }
      }
      let currentDate = new Date()
      let date_val = new Date(currentDate.getTime() + 10 * 24 * 60 * 60 * 1000)
      let date_final = Math.floor(date_val.getTime() / 1000)
      Cookies.set('auth', JSON.stringify(true))
      Cookies.set('username', JSON.stringify(data[0].name))
      Cookies.set('expire', JSON.stringify(date_final))
      Cookies.set('dp', JSON.stringify(data[0].dp))
      return { result: data, error: '' }
    } catch (err) {
      return { result: '', error: err.message }
    }
  },
  async getShayari(context, payload) {
    try {
      let { data, error } = await supabase.from('Shayari').select('*').eq('category', payload.value)
      if (error) {
        return { result: '', error: error.message }
      }
      return { result: data, err: '' }
    } catch (err) {
      return { result: '', error: '' }
    }
  },
  async postShayari(context, payload) {
    try {
      let { data1, error1 } = await supabase
        .from('Shayari')
        .insert([
          {
            content: payload.content,
            category: payload.category,
            by: Cookies.get('username')
          }
        ])
        .select()
      if (error1) {
        return { result: '', error: error1 }
      }
      return { result: data1, error: '' }
    } catch (err) {
      return { result: '', error: '' }
    }
  },
  async getProfile() {}
}
