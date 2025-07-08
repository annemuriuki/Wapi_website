import React, { useState } from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import Toast from '../components/Toast';
import usersData from '../data/users';
import '../styles/pages/UserManagement.css';

const emptyUser = { name: '', email: '', mobile: '', status: 'Active', photo: '' };

const UserManagement = () => {
  const [users, setUsers] = useState(usersData);
  const [modal, setModal] = useState({ open: false, type: '', user: null });
  const [toast, setToast] = useState({ open: false, message: '' });
  const [filter, setFilter] = useState('');
  const [form, setForm] = useState(emptyUser);
  const navigate = useNavigate();

  // Modal handlers
  const openModal = (type, user = null) => {
    setModal({ open: true, type, user });
    if (type === 'edit' && user) setForm(user);
    if (type === 'add') setForm(emptyUser);
  };
  const closeModal = () => { setModal({ open: false, type: '', user: null }); setForm(emptyUser); };
  const showToast = message => { setToast({ open: true, message }); };
  const closeToast = () => setToast({ open: false, message: '' });

  // CRUD actions
  const handleAdd = e => {
    e.preventDefault();
    setUsers([...users, { ...form, id: Date.now() }]);
    closeModal();
    showToast('User added (demo)');
  };
  const handleEdit = e => {
    e.preventDefault();
    setUsers(users.map(u => u.id === form.id ? form : u));
    closeModal();
    showToast('User updated (demo)');
  };
  const handleDelete = id => { setUsers(users.filter(u => u.id !== id)); closeModal(); showToast('User deleted (demo)'); };
  const handleLogin = user => { showToast(`Demo: Login as ${user.name}`); };
  const handleImport = () => showToast('Demo: Import not available');
  const handleExport = () => showToast('Demo: Export not available');
  const handleFilter = val => setFilter(val);

  // Filtered users
  const filteredUsers = filter ? users.filter(u => u.name.toLowerCase().includes(filter.toLowerCase()) || u.email.toLowerCase().includes(filter.toLowerCase())) : users;

  // Form change handler
  const handleFormChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  return (
    <div className="user-mgmt-page">
      <div className="user-mgmt-content">
        <button className="back-home-btn" onClick={() => navigate('/')}>← Back to Home</button>
        <div className="user-mgmt-topbar">
          <h2>Members</h2>
          <div className="user-mgmt-actions">
            <button className="btn primary" onClick={() => openModal('add')}>Add new</button>
            <button className="btn" onClick={handleImport}>Import members</button>
            <button className="btn" onClick={handleExport}>Export members (Excel)</button>
            <button className="btn filter" onClick={() => openModal('filter')}>Filter</button>
          </div>
        </div>
        <div className="user-mgmt-table-wrap">
          <table className="user-mgmt-table">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Member name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Status</th>
                <th>Operation</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, idx) => (
                <tr key={user.id}>
                  <td><img src={user.photo} alt={user.name} className="user-photo" /></td>
                  <td>{user.name}</td>
                  <td>{user.mobile}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className={`status-chip ${user.status === 'Active' ? 'active' : 'inactive'}`}>{user.status}</span>
                  </td>
                  <td>
                    <div className="op-icons">
                      <FaEye title="View" onClick={() => openModal('view', user)} />
                      <FaEdit title="Edit" onClick={() => openModal('edit', user)} />
                      <FaTrash title="Delete" onClick={() => openModal('delete', user)} />
                    </div>
                  </td>
                  <td><button className="btn login" onClick={() => handleLogin(user)}>Login</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add User Modal */}
      <Modal open={modal.open && modal.type === 'add'} onClose={closeModal}>
        <h3 className="modal-title">Add New User</h3>
        <form className="user-modal-form" onSubmit={handleAdd}>
          <label>Name<input name="name" value={form.name} onChange={handleFormChange} required /></label>
          <label>Email<input name="email" type="email" value={form.email} onChange={handleFormChange} required /></label>
          <label>Mobile<input name="mobile" value={form.mobile} onChange={handleFormChange} required /></label>
          <label>Status
            <select name="status" value={form.status} onChange={handleFormChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <label>Photo URL<input name="photo" value={form.photo} onChange={handleFormChange} /></label>
          <div className="modal-actions">
            <button className="btn" type="button" onClick={closeModal}>Cancel</button>
            <button className="btn primary" type="submit">Add</button>
          </div>
        </form>
      </Modal>
      {/* Edit User Modal */}
      <Modal open={modal.open && modal.type === 'edit'} onClose={closeModal}>
        <h3 className="modal-title">Edit User</h3>
        <form className="user-modal-form" onSubmit={handleEdit}>
          <label>Name<input name="name" value={form.name} onChange={handleFormChange} required /></label>
          <label>Email<input name="email" type="email" value={form.email} onChange={handleFormChange} required /></label>
          <label>Mobile<input name="mobile" value={form.mobile} onChange={handleFormChange} required /></label>
          <label>Status
            <select name="status" value={form.status} onChange={handleFormChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </label>
          <label>Photo URL<input name="photo" value={form.photo} onChange={handleFormChange} /></label>
          <div className="modal-actions">
            <button className="btn" type="button" onClick={closeModal}>Cancel</button>
            <button className="btn primary" type="submit">Save</button>
          </div>
        </form>
      </Modal>
      {/* View User Modal */}
      <Modal open={modal.open && modal.type === 'view'} onClose={closeModal}>
        <h3 className="modal-title">User Details</h3>
        <div className="user-view-modal">
          <img src={modal.user?.photo} alt={modal.user?.name} className="user-photo large" />
          <div><b>Name:</b> {modal.user?.name}</div>
          <div><b>Email:</b> {modal.user?.email}</div>
          <div><b>Mobile:</b> {modal.user?.mobile}</div>
          <div><b>Status:</b> <span className={`status-chip ${modal.user?.status === 'Active' ? 'active' : 'inactive'}`}>{modal.user?.status}</span></div>
        </div>
      </Modal>
      {/* Delete User Modal */}
      <Modal open={modal.open && modal.type === 'delete'} onClose={closeModal}>
        <h3 className="modal-title">Delete User?</h3>
        <p>Are you sure you want to delete <b>{modal.user?.name}</b>?</p>
        <div className="modal-actions">
          <button className="btn" onClick={closeModal}>Cancel</button>
          <button className="btn primary" onClick={() => handleDelete(modal.user.id)}>Delete</button>
        </div>
      </Modal>
      {/* Filter Modal */}
      <Modal open={modal.open && modal.type === 'filter'} onClose={closeModal}>
        <h3 className="modal-title">Filter Users</h3>
        <input type="text" placeholder="Name or email" value={filter} onChange={e => handleFilter(e.target.value)} className="modal-filter-input" />
        <div className="modal-actions">
          <button className="btn primary" onClick={closeModal}>Apply</button>
        </div>
      </Modal>
      <Toast open={toast.open} message={toast.message} onClose={closeToast} />
    </div>
  );
};

export default UserManagement; 