
export default function () {
    const _required = (val: any) => {
        const valid = Array.isArray(val) ? val.length !== 0 : (!!val || val === 0)
        return valid || 'Este campo es requerido';
    }

    const _email = (value: string) => {
        return /^[^@]+@[^@.]+(.[^@]+)*\.[a-zA-Z]{2,}$/.test(value) || "El email debe ser válido";
    }

    return { _required, _email }
}
