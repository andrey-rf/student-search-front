function onlyNumbers(str: string) {
  return str.replace(/[^\d]/g, '');
}

function formatCpf(str: string) {
  const res = onlyNumbers(str);
  return res.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export { formatCpf, onlyNumbers };
