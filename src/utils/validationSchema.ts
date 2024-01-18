import * as Yup from 'yup'

export const validationRules = {
  mensage: Yup.string().required('Mensagem é obrigatória'),
  title: Yup.string().required('Título é obrigatório'),

}

export const validationSchema = (initialValues: Object) => {
  const schema: Partial<typeof validationRules> = {}

  const keys = Object.keys(validationRules)

  Object.keys(initialValues).forEach((key) => {
    if (keys.includes(key))
      schema[key as keyof typeof schema] = validationRules[
        key as keyof typeof validationRules
      ] as any
  })

  return Yup.object(schema)
}
