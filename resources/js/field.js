import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-price-nice-field', IndexField)
  app.component('detail-price-nice-field', DetailField)
  app.component('form-price-nice-field', FormField)
})
