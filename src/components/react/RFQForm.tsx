import { useState } from 'react';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function RFQForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg">
        <p className="font-semibold">感谢您的询价！</p>
        <p>我们将尽快与您联系。</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            姓名 *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="请输入您的姓名"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
            公司名称
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="请输入公司名称"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            邮箱 *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
            电话
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="请输入您的电话"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">
          感兴趣的产品
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">请选择产品类型</option>
          <optgroup label="软件产品">
            <option value="wlg-ide">WLG-IDE 组态软件</option>
            <option value="agent-switch">智能体交换机控制器</option>
            <option value="edge-compute">边缘计算控制器软件</option>
            <option value="security-gateway">工业安全网关软件</option>
          </optgroup>
          <optgroup label="E3系列PLC">
            <option value="var-p-500">VAR-P-500 高端系列</option>
            <option value="var-p-500d">VAR-P-500D 基础系列</option>
            <option value="var-p-500u">VAR-P-500U 拓展系列</option>
          </optgroup>
          <optgroup label="X2系列PLC">
            <option value="var-x-100">VAR-X-100 基础款</option>
            <option value="var-x-200">VAR-X-200 运动控制版</option>
          </optgroup>
          <optgroup label="网络设备">
            <option value="was-8-1000">WAS-8-1000 工业交换机</option>
          </optgroup>
          <option value="other">其他</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          留言 *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="请描述您的需求..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        提交询价
      </button>
    </form>
  );
}
