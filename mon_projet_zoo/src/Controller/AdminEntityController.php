<?php

namespace App\Controller;

use App\Entity\AdminEntity;
use App\Form\AdminEntityType;
use App\Repository\AdminEntityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/admin/entity')]
class AdminEntityController extends AbstractController
{
    #[Route('/', name: 'app_admin_entity_index', methods: ['GET'])]
    public function index(AdminEntityRepository $adminEntityRepository): Response
    {
        return $this->render('admin_entity/index.html.twig', [
        'admin_entities' => $adminEntityRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_admin_entity_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $adminEntity = new AdminEntity();
        $form = $this->createForm(AdminEntityType::class, $adminEntity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
        $entityManager->persist($adminEntity);
        $entityManager->flush();

        return $this->redirectToRoute('app_admin_entity_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin_entity/new.html.twig', [
        'admin_entity' => $adminEntity,
        'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_entity_show', methods: ['GET'])]
    public function show(AdminEntity $adminEntity): Response
    {
        return $this->render('admin_entity/show.html.twig', [
        'admin_entity' => $adminEntity,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_admin_entity_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, AdminEntity $adminEntity, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(AdminEntityType::class, $adminEntity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
        $entityManager->flush();

        return $this->redirectToRoute('app_admin_entity_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('admin_entity/edit.html.twig', [
        'admin_entity' => $adminEntity,
        'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_admin_entity_delete', methods: ['POST'])]
    public function delete(Request $request, AdminEntity $adminEntity, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$adminEntity->getId(), $request->getPayload()->get('_token'))) {
        $entityManager->remove($adminEntity);
        $entityManager->flush();
        }

        return $this->redirectToRoute('app_admin_entity_index', [], Response::HTTP_SEE_OTHER);
    }
}
